/**
 * Normalize Astro base URL into a root-relative path without a trailing slash.
 * @example normalizeBaseUrl('/') => ''
 * @example normalizeBaseUrl('portfolio/') => '/portfolio'
 * @example normalizeBaseUrl('/portfolio/') => '/portfolio'
 */
export function normalizeBaseUrl(baseUrl = import.meta.env.BASE_URL) {
  if (!baseUrl || baseUrl === '/') return '';
  return `/${baseUrl}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
}

/**
 * Resolve asset path with base URL
 * @param path The asset path
 * @returns The resolved asset path with base URL
 * @example resolveAsset('/assets/logo.svg') => '/base/assets/logo.svg'
 */
export function resolveAsset(path: string) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = normalizeBaseUrl();
  return `${base}/${path}`.replace(/\/+/g, '/');
}
