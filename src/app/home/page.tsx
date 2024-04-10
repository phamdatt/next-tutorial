"use client";
import React, { useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { homeScheme } from "@/helpers/yup/validation";
import i18nInstance, { I18N_CURRENT_LOCALE, I18N_LOCALE } from "@/helpers/i18n";
import { useTranslation } from "react-i18next";
import { saveData } from "@/helpers/local-storage/local-storage";
export default function Home() {
  const toast: any = useRef(null);
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver<ILoginParams>(homeScheme),
    defaultValues: {
      account: "",
      password: "",
    },
  });
  const show = () => {
    toast?.current?.show({
      severity: "success",
      summary: "Form Submitted",
      detail: "",
    });
  };

  const onSubmit = (data: any) => {
    data.value && show();

    reset();
  };

  const handleChangeLanguage = async () => {
    console.log(I18N_CURRENT_LOCALE);
    if (I18N_CURRENT_LOCALE === I18N_LOCALE.EN) {
      await saveData("locale", I18N_LOCALE.VI);
      i18nInstance.changeLanguage(I18N_LOCALE.VI);
      return;
    }
    await saveData("locale", I18N_LOCALE.EN);
    i18nInstance.changeLanguage(I18N_LOCALE.EN);
  };

  return (
    <div>
      <p>{t("post_page.title", { ns: "pages" })}</p>
      <Button onClick={handleChangeLanguage}>Change locale</Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="account"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.account })}
              ></label>
              <div>
                <InputText
                  id={field.name}
                  className={classNames({ "p-invalid": fieldState.error })}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="Name - Surname"
                />
                <p>{t(errors.account?.message!)}</p>
              </div>
            </div>
          )}
        />
        <div>
          <div>
            <Button
              icon="pi pi-check"
              className="block"
              aria-label="Filter"
              label="Name"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
