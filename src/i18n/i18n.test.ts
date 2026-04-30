import { describe, it, expect } from 'vitest';
import { changeLanguage, useTranslations } from './i18n.ts';

describe('useTranslations', () => {
  it('should return the translation for the given key in the default language', () => {
    const t = useTranslations('zh-cn');
    expect(t('Navbar-1')).toBe('首页');
  });

  it('should replace placeholders with actual values in the translation', () => {
    const t = useTranslations('zh-cn');
    expect(t('Hero-Greeting', { name: '何芳' })).toBe('你好，我是 何芳');
  });

  it('should fallback to the default translation if the target language is not provided', () => {
    const t = useTranslations();
    expect(t('Resume-1')).toBe('在线履历');
  });
});

describe('changeLanguage', () => {
  it('should keep the zh-cn prefix for locale routes', () => {
    const path = '/zh-cn/about';
    const newPath = changeLanguage('zh-cn', path);
    expect(newPath).toBe('/zh-cn/about');
  });

  it('should add the locale prefix when the path does not contain one', () => {
    const path = '/about';
    const newPath = changeLanguage('zh-cn', path, true);
    expect(newPath).toBe('/zh-cn/about');
  });
});
