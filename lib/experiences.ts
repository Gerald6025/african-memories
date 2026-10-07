import type { Activity, ExperienceDetails } from './api';

export const categoryLabels: Record<string, string> = {
  featured: 'Our favourites', 'first-visit': 'First-time favourites',
  wildlife: 'Wildlife & safari', adventure: 'Adventure', river: 'On the river',
  culture: 'Culture & food', 'day-trips': 'Day trips', scenic: 'Scenic experiences',
  relaxation: 'Rest & relaxation',
};

export function categoryLabel(category: string): string {
  const key = category.toLowerCase();
  return categoryLabels[key] || key.split(/[-_ ]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export interface ExperiencePrice {
  label: string;
  source: 'current' | 'guide' | 'enquiry';
}

export function experiencePrice(activity: Activity, now = Date.now()): ExperiencePrice {
  const price = (activity.prices || [])
    .filter(item => item.isActive && Date.parse(item.validFrom) <= now && Date.parse(item.validTo) >= now
      && String(item.amount).trim() !== '' && Number.isFinite(Number(item.amount)) && Number(item.amount) >= 0)
    .sort((a, b) => Date.parse(b.validFrom) - Date.parse(a.validFrom))[0];
  if (price) {
    const amount = Number(price.amount).toLocaleString('en-US', { maximumFractionDigits: 2 });
    const currency = price.currency === 'USD' ? 'US$' : `${price.currency} `;
    return { label: `From ${currency}${amount}`, source: 'current' };
  }
  const guide = activity.details?.fromPrice?.trim();
  if (guide && /\d/.test(guide)) {
    return { label: `From ${guide.replace(/^from\s+/i, '')}`, source: 'guide' };
  }
  return { label: 'Price on enquiry', source: 'enquiry' };
}

export function experienceImage(src?: string | null, apiBase?: string): string {
  if (!src) return '';
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith('/experiences/') || src.startsWith('/media/experiences/')) {
    const base = apiBase || process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
    if (!base) return '';
    const path = src.startsWith('/media/') ? src : `/media${src}`;
    return new URL(path, base).toString();
  }
  return src;
}

export function experienceDetails(activity: Activity): ExperienceDetails | null {
  if (!activity.details) return null;
  const details = activity.details;
  return {
    ...details,
    featuredImage: experienceImage(details.featuredImage),
    galleryImages: (details.galleryImages || []).map(src => experienceImage(src)).filter(Boolean),
    steps: details.steps?.map(step => ({ ...step, image: experienceImage(step.image) || undefined })),
  };
}

export interface ExperienceCardData {
  id: string; slug: string; title: string; description: string; image: string;
  categories: string[]; duration?: string; location?: string; badge?: string;
  price: ExperiencePrice;
}

export function experienceCard(activity: Activity, now = Date.now()): ExperienceCardData {
  return {
    id: activity.id, slug: activity.slug, title: activity.name,
    description: activity.details?.shortDescription || activity.description || '',
    image: experienceImage(activity.details?.featuredImage || activity.image),
    categories: activity.details?.categories?.length
      ? activity.details.categories.map(category => category.toLowerCase())
      : [activity.category.toLowerCase()],
    duration: activity.details?.duration, location: activity.details?.location,
    badge: activity.details?.badge, price: experiencePrice(activity, now),
  };
}
