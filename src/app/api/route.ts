import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, Locales } from "@/helpers/i18n/settings";
export async function GET() {
  const value = cookies().get(LANGUAGE_COOKIE)?.value;
  return Response.json({ value: value as Locales });
}
