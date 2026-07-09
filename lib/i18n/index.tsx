"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import en, { type Dict } from "./en";
import uk from "./uk";
import ru from "./ru";

export const LOCALES = ["en", "uk", "ru"] as const;
export type Locale = (typeof LOCALES)[number];

// Short labels shown in the language switcher.
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  uk: "UA",
  ru: "RU",
};

const dictionaries: Record<Locale, Dict> = { en, uk, ru };

const STORAGE_KEY = "sn-lang";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as readonly string[]).includes(value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Restore the saved language on mount (client-only, avoids hydration drift).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(saved)) setLocaleState(saved);
    } catch {
      /* localStorage unavailable, fall back to default */
    }
  }, []);

  // Keep the <html lang> attribute in sync for accessibility/SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore persistence failures */
    }
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within a LanguageProvider");
  }
  return ctx;
}

// Convenience hook returning just the active dictionary.
export function useT(): Dict {
  return useI18n().t;
}
