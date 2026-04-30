import zhCnTranslation from './zh-cn.json';

export const languages = {
  'zh-cn': '简体中文',
} as const;

export const languageTags = {
  'zh-cn': 'zh-Hans-CN',
} as const;

export const regionTags = {} as const;

export const defaultLocale = 'zh-cn';
export const prefixDefaultLocale = true;

export type LanguageKey = keyof typeof languages;
export type LanguageValue = (typeof languages)[LanguageKey];

export const getTranslationFile = (targetLocale: LanguageKey) => {
  if (targetLocale === 'zh-cn') return zhCnTranslation;
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
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathWithoutBase = path.startsWith(base) ? path.slice(base.length) : path;
  const prefixRegex = new RegExp(`^/(${languagePrefixes.join('|')})`);
  return pathWithoutBase.replace(prefixRegex, '').replace(/^\/+/, '');
}

function constructNewPath(targetLocale: LanguageKey, path: string, isDefaultLocalePrefixed: boolean): string {
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!isDefaultLocalePrefixed && targetLocale === defaultLocale) {
    return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
  }
  return cleanPath ? `${base}/${targetLocale}/${cleanPath}` : `${base}/${targetLocale}`;
}

export function changeLanguage(
  targetLocale: LanguageKey,
  path: string,
  isDefaultLocalePrefixed = prefixDefaultLocale,
): string {
  const languagePrefixes = Object.keys(languages);
  const cleanedPath = removeLanguagePrefix(path, languagePrefixes);
  return constructNewPath(targetLocale, cleanedPath, isDefaultLocalePrefixed);
}
