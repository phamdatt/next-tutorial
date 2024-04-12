import { createTranslation } from "@/helpers/i18n/server";

export default async function IndexPage() {
  const { t } = await createTranslation("pages");
  return (
    <div>
      <h1>{t("post_page.title")}</h1>
    </div>
  );
}
