import type { InitOptions } from "i18next";
import commonEn from "../../../public/locales/en/common";
import errorsEn from "../../../public/locales/vi/errors";
import componentsEn from "../../../public/locales/vi/components";
import pagesEn from "../../../public/locales/en/pages";
import commonVi from "../../../public/locales/vi/common";
import errorsVi from "../../../public/locales/vi/errors";
import componentsVi from "../../../public/locales/vi/components";
import pagesVi from "../../../public/locales/vi/pages";

export const I18N_LOCALE = {
  EN: "en",
  VI: "vi",
};
export let I18N_CURRENT_LOCALE = "en";
const I18N_DEFAULT_NAMEPSACE = "common";
const localeResources = {
  [I18N_LOCALE.EN]: {
    [I18N_DEFAULT_NAMEPSACE]: commonEn,
    pages: pagesEn,
    errors: errorsEn,
    components: componentsEn,
  },
  [I18N_LOCALE.VI]: {
    [I18N_DEFAULT_NAMEPSACE]: commonVi,
    pages: pagesVi,
    errors: errorsVi,
    components: componentsVi,
  },
};
export const FALLBACK_LOCALE = "en";
export const supportedLocales = ["en", "vi"] as const;
export type Locales = (typeof supportedLocales)[number];

// You can name the cookie to whatever you want
export const LANGUAGE_COOKIE = "preferred_language";

export function getOptions(lang = FALLBACK_LOCALE, ns = "common"): InitOptions {
  I18N_CURRENT_LOCALE = lang;
  return {
    // debug: true, // Set to true to see console logs
    resources: localeResources,
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns,
  };
}
