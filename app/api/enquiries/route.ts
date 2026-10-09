import { NextRequest, NextResponse } from 'next/server';
import { isValidRequestOrigin } from '../../../lib/request-origin';

export async function POST(request: NextRequest) {
  if (!isValidRequestOrigin(request.headers, request.nextUrl.origin)) return NextResponse.json({ message: 'Invalid request origin.' }, { status: 403 });
  if (!request.headers.get('content-type')?.includes('application/json')) return NextResponse.json({ message: 'Expected JSON.' }, { status: 415 });
  let payload: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error('Empty body');
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 24_000) {
        await reader.cancel();
        return NextResponse.json({ message: 'Your message is too long.' }, { status: 413 });
      }
      chunks.push(value);
    }
    payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch { return NextResponse.json({ message: 'Please check the form fields.' }, { status: 400 }); }

  try {
    const base = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL)?.trim();
    if (!base) throw new Error('API configuration missing');
    const url = new URL(base);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error('Invalid API configuration');
    const response = await fetch(`${base.replace(/\/+$/, '')}/enquiries`, {
      method: 'POST', cache: 'no-store', signal: AbortSignal.timeout(15_000),
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload),
    });
    if (!response.ok) {
      console.error(`Enquiry backend returned HTTP ${response.status}; check deployment, migrations and API_URL.`);
      const status = [400, 409, 429].includes(response.status) ? response.status : 503;
      const message = status === 429 ? 'Please wait a minute before submitting again.'
        : status === 400 ? 'Please check your name, email, phone, destination and message.'
        : status === 409 ? 'Please edit your message and submit again.'
        : 'We could not save your enquiry. Please try again or contact us by phone or email.';
      return NextResponse.json({ message }, { status });
    }
    const result = await response.json();
    if (result.received !== true || typeof result.id !== 'string') throw new Error('Invalid API response');
    return NextResponse.json({ received: true, id: result.id }, { status: 201 });
  } catch (error) {
    console.error('Enquiry API unavailable. Check API_URL and backend readiness.', error instanceof Error ? error.name : 'UnknownError');
    return NextResponse.json({ message: 'We could not save your enquiry. Please try again or contact us by phone or email.' }, { status: 503 });
  }
}
