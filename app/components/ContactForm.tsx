'use client';

import React, { useRef, useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";


const COLORS = {
  bg: "#fff7e5",
  text: "#4b3621",
  textSoft: "#5d4a37",
  accent: "#e77b2a",
  white: "#ffffff",
  border: "#b7afa6",
  borderSoft: "#c9c3bc",
};

const contactCards = [
  {
    title: "Call us:",
    lines: [
      { text: "+263 772 260 839", href: "tel:+263772260839" },
      { text: "+263 775 050 297", href: "tel:+263775050297" },
    ],
  },
  {
    title: "Mail us:",
    lines: [
      { text: "info@africanmemories.com", href: "mailto:info@africanmemories.com" },
      { text: "res@africanmemories.com", href: "mailto:res@africanmemories.com" },
    ],
  },
  {
    title: "Head Office:",
    lines: [
      {
        text: "4920 Chinotimba, Victoria Falls, Zimbabwe",
        href: "https://www.google.com/maps/search/?api=1&query=4920%20Chinotimba%2C%20Victoria%20Falls%2C%20Zimbabwe",
      },
    ],
  },
  {
    title: "Regional Office:",
    lines: [
      {
        text: "4920 Chinotimba, Victoria Falls, Zimbabwe",
        href: "https://www.google.com/maps/search/?api=1&query=4920%20Chinotimba%2C%20Victoria%20Falls%2C%20Zimbabwe",
      },
    ],
  },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  destination: string;
  message: string;
  website: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  message: "",
  website: "",
};

export default function ContactPage({ initialMessage = "", initialDestination = "" }: { initialMessage?: string; initialDestination?: string }) {
  const [form, setForm] = useState<FormState>({ ...initialForm, message: initialMessage, destination: initialDestination });
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const requestId = useRef<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    requestId.current = null;
    setSubmitted(false);
    setError('');
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setSubmitted(false);
    setError('');
    requestId.current ||= crypto.randomUUID();
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, requestId: requestId.current }), signal: AbortSignal.timeout(20_000),
      });
      const result = await response.json();
      if (!response.ok || result.received !== true) throw new Error(result.message || 'We could not save your enquiry. Please try again or contact us directly.');
      setReference(result.id);
      setSubmitted(true);
      setForm(initialForm);
      requestId.current = null;
    } catch (failure) {
      setError(failure instanceof Error && failure.name !== 'TimeoutError' && failure.name !== 'TypeError'
        ? failure.message : 'We could not confirm your enquiry. Please try again or contact us by phone or email.');
    } finally { setPending(false); }
  };

  return (
    <div style={{ backgroundColor: COLORS.bg }} className="min-h-screen w-full font-sans">
      {/* ---------- Contact section ---------- */}
      <section className="mx-auto max-w-[1360px] px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: description + image */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-[44px]" style={{ color: COLORS.text }}>
                Keep in touch with the safari experts
              </h2>
              <p className="text-base leading-relaxed sm:text-lg" style={{ color: COLORS.textSoft }}>
                Get in Touch with Us — Start Planning Your Ultimate Safari
                Adventure Today!
              </p>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-none">
              <img
                src="https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Banner.jpg?updatedAt=1778156384582"
                alt="Safari guide with guests"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: form */}
          <form id="enquiry-form" onSubmit={handleSubmit} className="flex scroll-mt-28 flex-col gap-8">
            <div className="hidden" aria-hidden="true">
              <label>Website<input name="website" value={form.website} onChange={handleChange} autoComplete="off" tabIndex={-1} /></label>
            </div>
            <div className="flex flex-col gap-6">
              <FormField
                label="Full Name"
                icon={<User size={18} color={COLORS.textSoft} />}
              >
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={120}
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full border-0 border-b bg-transparent pb-4 text-lg outline-none placeholder:text-[#6f5e4d]"
                  style={{ borderColor: COLORS.borderSoft, color: COLORS.textSoft }}
                />
              </FormField>

              <FormField
                label="Phone number"
                icon={<Phone size={18} color={COLORS.textSoft} />}
              >
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  minLength={5}
                  maxLength={40}
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number, including country code"
                  className="w-full border-0 border-b bg-transparent pb-4 text-lg outline-none placeholder:text-[#6f5e4d]"
                  style={{ borderColor: COLORS.borderSoft, color: COLORS.textSoft }}
                />
              </FormField>

              <FormField
                label="Email Address"
                icon={<Mail size={18} color={COLORS.textSoft} />}
              >
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full border-0 border-b bg-transparent pb-4 text-lg outline-none placeholder:text-[#6f5e4d]"
                  style={{ borderColor: COLORS.borderSoft, color: COLORS.textSoft }}
                />
              </FormField>

              <FormField
                label="Preferred Destination"
                icon={<MapPin size={18} color={COLORS.textSoft} />}
              >
                <input
                  type="text"
                  name="destination"
                  minLength={2}
                  maxLength={160}
                  required
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Enter your preferred destination"
                  className="w-full border-0 border-b bg-transparent pb-4 text-lg outline-none placeholder:text-[#6f5e4d]"
                  style={{ borderColor: COLORS.borderSoft, color: COLORS.textSoft }}
                />
              </FormField>

              <FormField
                label="Additional Requests"
                icon={<MessageSquare size={18} color={COLORS.textSoft} />}
              >
                <textarea
                  name="message"
                  minLength={10}
                  maxLength={5000}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="If you need anything else from us, write it here..."
                  rows={3}
                  className="w-full resize-none border-0 border-b bg-transparent pb-4 text-lg outline-none placeholder:text-[#6f5e4d]"
                  style={{ borderColor: COLORS.borderSoft, color: COLORS.textSoft }}
                />
              </FormField>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-fit rounded-none px-14 py-4 text-base font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: COLORS.accent }}
            >
              {pending ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && (
              <p role="status" className="text-sm font-medium" style={{ color: COLORS.accent }}>
                Thanks! Your enquiry has been received. We&apos;ll be in touch soon. Reference: {reference}
              </p>
            )}
            {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          </form>
        </div>

        {/* Contact info cards */}
        <div className="mt-20 border-t pt-12" style={{ borderColor: COLORS.borderSoft }}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <div key={card.title} className="flex flex-col gap-3">
                <h3 className="text-xl font-bold sm:text-2xl" style={{ color: COLORS.text }}>
                  {card.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {card.lines.map((line) => (
                    <a
                      key={line.text}
                      href={line.href}
                      className="text-lg transition-colors hover:opacity-70"
                      style={{ color: COLORS.text }}
                    >
                      {line.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="w-full">
        <div className="h-[300px] w-full sm:h-[400px] md:h-[500px]">
          <iframe
            title="African Memories office in Victoria Falls"
            className="h-full w-full border-0"
            src="https://maps.google.com/maps?q=4920%20Chinotimba%2C%20Victoria%20Falls%2C%20Zimbabwe&z=14&output=embed"
          />
        </div>
      </section>
    </div>
  );
}

/* ---------- Helper components ---------- */

function FormField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-lg" style={{ color: COLORS.textSoft }}>
        {label}
      </span>
      <div className="flex items-center gap-3">
        <div className="flex-1">{children}</div>
        <div className="pb-4">{icon}</div>
      </div>
    </label>
  );
}
