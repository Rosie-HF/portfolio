import zhCnTranslation from './zh-cn.json';
import enTranslation from './en.json';
import { normalizeBaseUrl } from '../utils/paths.ts';

export const languages = {
  'zh-cn': '简体中文',
  en: 'English',
} as const;

export const languageTags = {
  'zh-cn': 'zh-Hans-CN',
  en: 'en-US',
} as const;

export const regionTags = {} as const;

export const defaultLocale = 'zh-cn';
export const prefixDefaultLocale = true;

export type LanguageKey = keyof typeof languages;
export type LanguageValue = (typeof languages)[LanguageKey];

export const getTranslationFile = (targetLocale: LanguageKey) => {
  if (targetLocale === 'zh-cn') return zhCnTranslation;
  if (targetLocale === 'en') return enTranslation;
  return zhCnTranslation;
};

export function useTranslations(targetLanguage?: LanguageKey) {
  return function t(key: keyof typeof zhCnTranslation, params?: Record<string, string>) {
    const translation = getTranslationFile(targetLanguage ?? defaultLocale)?.[key];

    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(new RegExp(`{${paramKey}}`, 'g'), paramValue),
        translation,
      );
    }

    return translation;
  };
}

function removeLanguagePrefix(path: string, languagePrefixes: string[]): string {
  const base = normalizeBaseUrl();
  const pathWithoutBase = path.startsWith(base) ? path.slice(base.length) : path;
  const prefixRegex = new RegExp(`^/(${languagePrefixes.join('|')})`);
  return pathWithoutBase.replace(prefixRegex, '').replace(/^\/+/, '');
}

export function getLocalePath(targetLocale: LanguageKey, path = '/') {
  const base = normalizeBaseUrl();
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const segments = [base.replace(/^\/+/, '')];

  if (prefixDefaultLocale || targetLocale !== defaultLocale) {
    segments.push(targetLocale);
  }

  if (cleanPath) {
    segments.push(cleanPath);
  }

  return `/${segments.filter(Boolean).join('/')}/`.replace(/\/{2,}/g, '/');
}

export function changeLanguage(
  targetLocale: LanguageKey,
  path: string,
  isDefaultLocalePrefixed = prefixDefaultLocale,
): string {
  if (!isDefaultLocalePrefixed && targetLocale === defaultLocale) {
    const base = normalizeBaseUrl();
    const cleanedPath = removeLanguagePrefix(path, Object.keys(languages)).replace(/\/+$/, '');
    const segments = [base.replace(/^\/+/, '')];

    if (cleanedPath) {
      segments.push(cleanedPath);
    }

    return `/${segments.filter(Boolean).join('/')}/`.replace(/\/{2,}/g, '/');
  }

  const languagePrefixes = Object.keys(languages);
  const cleanedPath = removeLanguagePrefix(path, languagePrefixes);
  return getLocalePath(targetLocale, cleanedPath);
}
