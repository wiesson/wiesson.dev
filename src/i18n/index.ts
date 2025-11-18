/**
 * i18n utility functions
 */

import de from './de.json';
import en from './en.json';

export type Locale = 'de' | 'en';

const translations = {
  de,
  en,
};

export type TranslationKey = typeof de;

/**
 * Get translations for a specific locale
 */
export function getTranslations(locale: Locale = 'de'): TranslationKey {
  return translations[locale] || translations.de;
}

/**
 * Type-safe translation function
 */
export function t(locale: Locale, key: string): string {
  const trans = getTranslations(locale);
  const keys = key.split('.');
  let value: any = trans;

  for (const k of keys) {
    value = value?.[k];
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get locale from URL path
 * /en/... -> 'en'
 * /... -> 'de' (default)
 */
export function getLocaleFromUrl(url: URL): Locale {
  const pathParts = url.pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];

  if (firstPart === 'en') {
    return 'en';
  }

  return 'de';
}

/**
 * Get localized path
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove leading slash
  const cleanPath = path.replace(/^\//, '');

  if (locale === 'en') {
    return `/en/${cleanPath}`;
  }

  return `/${cleanPath}`;
}
