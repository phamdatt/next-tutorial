import { useTranslation as useTransAlias } from "react-i18next";
export function useTranslationCustom(ns = "pages") {
  const translator = useTransAlias(ns);
  return translator;
}
