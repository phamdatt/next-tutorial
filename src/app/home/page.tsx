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
import { Card } from "primereact/card";
import FormMessageError from "@/components/form/form-message-error";

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
      {/* <Loading /> */}
      <div className="flex flex-wrap justify-content-between gap-2">
        <p className="text-xs">{t("home_page.title", { ns: "pages" })}</p>
        <Button
          onClick={handleChangeLanguage}
          className="text-xs"
          label="Change Language"
        />
      </div>
      <Card className="card flex justify-content-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="account"
            control={control}
            render={({ field, fieldState }) => (
              <div
                style={{
                  width: 300,
                }}
              >
                <div>
                  <InputText
                    style={{
                      width: "100%",
                    }}
                    id={field.name}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <FormMessageError error={errors.account?.message!} />
                </div>
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div
                style={{
                  width: 300,
                }}
              >
                <div>
                  <InputText
                    style={{
                      width: "100%",
                    }}
                    id={field.name}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <FormMessageError error={errors.password?.message!} />
                </div>
              </div>
            )}
          />
          <div className="card flex justify-content-center">
            <Button
              icon="pi pi-check"
              className="block"
              aria-label="Filter"
              label="Submit"
            />
          </div>
        </form>
      </Card>
    </div>
  );
}
