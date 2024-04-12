"use server";
import { cookies } from "next/headers";
import { testScheme } from "@/helpers/yup/validation";
import { LANGUAGE_COOKIE, I18N_LOCALE } from "@/helpers/i18n/settings";
import { getLocale } from "@/helpers/i18n/server";

async function switchLocaleAction() {
  const locale = getLocale();
  let value = locale === I18N_LOCALE.EN ? I18N_LOCALE.VI : I18N_LOCALE.EN;
  cookies().set({
    name: LANGUAGE_COOKIE,
    value,
    httpOnly: true,
    path: "/",
  });
  return {
    status: "success",
  };
}

async function validateExampleAction(_prevState: any, formData: FormData) {
  let isValid = await testScheme.isValid({
    email: formData.get("email"),
  });
  if (!isValid) {
    return {
      message: "validator.stringEmail",
    };
  }
}

export { switchLocaleAction, validateExampleAction };
