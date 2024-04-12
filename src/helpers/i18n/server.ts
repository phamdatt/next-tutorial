import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import {
  FALLBACK_LOCALE,
  getOptions,
  Locales,
  LANGUAGE_COOKIE,
} from "./settings";
import { cookies } from "next/headers";

async function initI18next(lang: Locales, namespace: string) {
  const i18nInstance = createInstance();
  await i18nInstance.use(initReactI18next).init(getOptions(lang, namespace));

  return i18nInstance;
}

// This function will be used in our server components for the translation
export async function createTranslation(ns: string) {
  const lang = getLocale();
  const i18nextInstance = await initI18next(lang, ns);

  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
  };
}

// Utility function to get the locale from server components
export function getLocale() {
  return (cookies().get(LANGUAGE_COOKIE)?.value ?? FALLBACK_LOCALE) as Locales;
}
