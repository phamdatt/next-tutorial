import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEn from "../../public/locales/en/common";
import commonVi from "../../public/locales/vi/common";
import pagesEn from "../../public/locales/en/pages";
import pagesVi from "../../public/locales/vi/pages";

// It's important to create just only i18n instance
const i18nInstance = i18n.createInstance();
const I18N_LOCALE = {
  EN: "en",
  VI: "vi",
};

const I18N_DEFAULT_LOCALE = I18N_LOCALE.EN;
const I18N_DEFAULT_NAMEPSACE = "common";
let I18N_CURRENT_LOCALE = I18N_LOCALE.EN;

const localeResources = {
  [I18N_LOCALE.EN]: {
    [I18N_DEFAULT_NAMEPSACE]: commonEn,
    pages: pagesEn,
  },
  [I18N_LOCALE.VI]: {
    [I18N_DEFAULT_NAMEPSACE]: commonVi,
    pages: pagesVi,
  },
};

const isValidI18nLocale = (localeTag: string) => {
  if (typeof localeTag !== "string" || localeTag in localeResources === false) {
    return false;
  }
  return true;
};

i18nInstance.use(initReactI18next).init({
  debug: true,
  resources: localeResources,
  lng: I18N_DEFAULT_LOCALE,
  fallbackLng: I18N_LOCALE.EN,
  defaultNS: "common",
  ns: ["common", "pages"],
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

i18n.on("languageChanged", async (locale: string) => {
  if (!isValidI18nLocale(locale)) {
    I18N_CURRENT_LOCALE = I18N_DEFAULT_LOCALE;
  }
  I18N_CURRENT_LOCALE = locale;
});

export { I18N_LOCALE, I18N_DEFAULT_LOCALE, I18N_CURRENT_LOCALE };
export default i18nInstance;
