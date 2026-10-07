export class ApiError extends Error {
  constructor(public status: number) {
    super(`API request failed: ${status}`);
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const base = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL)?.trim();
  if (!base) throw new Error('API_URL is missing');
  const url = new URL(base);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('API_URL must be an HTTP(S) URL without credentials');
  }
  if (!path.startsWith('/') || path.startsWith('//')) throw new Error('Invalid API path');

  const response = await fetch(`${base.replace(/\/+$/, '')}${path}`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new ApiError(response.status);
  }

  return response.json() as Promise<T>;
}

export interface ActivityPrice {
  id: string;
  amount: string;
  currency: string;
  validFrom: string;
  validTo: string;
  isActive: boolean;
  createdAt: string;
}

export interface ActivityAvailability {
  id: string;
  startsAt: string;
  endsAt: string;
  capacity: number;
  remaining: number;
  createdAt: string;
}

export interface Activity {
  details?: ExperienceDetails | null;
  id: string;
  name: string;
  slug: string;
  category: string;
  description?: string | null;
  image?: string | null;
  status: string;
  prices: ActivityPrice[];
  availabilities: ActivityAvailability[];
  createdAt: string;
  updatedAt: string;
}

export interface ExperienceDetails {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  badge?: string;
  categories: string[];
  shortDescription: string;
  fullOverview: string;
  whyWeRecommend: string;
  duration: string;
  location?: string;
  fromPrice: string;
  priceAmount: number;
  featuredImage: string;
  galleryImages: string[];
  highlights: string[];
  whatsIncluded: string[];
  whatsExcluded?: string[];
  goodToKnow: string[];
  steps?: { stepNumber: number; time?: string; title: string; description: string; highlight?: string; image?: string }[];
  localExpertTip?: string;
  faqs: { q: string; a: string }[];
  relatedIds: string[];
}
