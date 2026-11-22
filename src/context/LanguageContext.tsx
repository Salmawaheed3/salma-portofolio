import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, portfolioContent, PortfolioLocaleData } from '../data/portfolioData';

interface LanguageContextValue {
  locale: Locale;
  isRtl: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  data: PortfolioLocaleData;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'salma-portfolio-locale';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
    return 'en';
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage access errors
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', locale);
    document.title =
      locale === 'ar'
        ? 'سلمى وحيد — مهندسة ذكاء اصطناعي وتعلم آلي'
        : 'Salma Waheed — AI & Machine Learning Engineer';
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        isRtl: locale === 'ar',
        setLocale,
        toggleLocale,
        data: portfolioContent[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
};
