export function imagekitUrl(src: string): string {
  const base = process.env.NEXT_PUBLIC_IMAGEKIT_URL || 'https://ik.imagekit.io/your_imagekit_id';
  if (!src) return src;
  const isAbsolute = /^https?:\/\//i.test(src);
  // If the src is already an ImageKit URL, return as-is to avoid double-wrapping
  if (isAbsolute && src.includes('ik.imagekit.io')) {
    return src;
  }
  if (isAbsolute) {
    return `${base}/tr/fetch/${encodeURIComponent(src)}`;
  }
  const path = src.replace(/^\/+/, '');
  return `${base}/${encodeURI(path)}`;
}

export default imagekitUrl;
