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
      <Card className="card flex justify-content-between">
        <Button onClick={handleChangeLanguage}>Change locale</Button>
        <Button onClick={handleChangeLanguage}>Change locale</Button>
      </Card>
      <Card className="card flex justify-content-center">
        {/* <div>{t("post_page.title", { ns: "pages" })}</div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="account"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <div>
                  <InputText
                    id={field.name}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Enter your account"
                  />
                  {errors.account?.message! ? (
                    <div
                      style={{
                        height: 20,
                      }}
                    >
                      <small
                        className={classNames({ "p-error": errors.account })}
                      >
                        {t(errors.account?.message!)}
                      </small>
                    </div>
                  ) : (
                    <div
                      style={{
                        height: 20,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <div>
                  <InputText
                    id={field.name}
                    className={classNames({ "p-invalid": fieldState.error })}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder="Enter your password"
                  />
                  {errors.account?.message! ? (
                    <div
                      style={{
                        height: 20,
                      }}
                    >
                      <small
                        className={classNames({ "p-error": errors.account })}
                      >
                        {t(errors.account?.message!)}
                      </small>
                    </div>
                  ) : (
                    <div
                      style={{
                        height: 20,
                      }}
                    ></div>
                  )}
                </div>
              </div>
            )}
          />
          <div className="flex justify-content-center">
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
