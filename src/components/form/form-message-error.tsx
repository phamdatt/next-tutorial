"use client";
import { useTranslation } from "react-i18next";
import { IFormMessageError } from "./types";

function FormMessageError(props: IFormMessageError) {
  const { error, ...restProps } = props;
  const { t } = useTranslation();

  if (error === undefined) {
    return null;
  } else if (typeof error === "string") {
    return (
      <small
        {...restProps}
        style={{
          color: "red",
        }}
      >
        {t(error)}
      </small>
    );
  } else {
    const { key, values } = error;
    return (
      <small
        {...restProps}
        style={{
          color: "red",
        }}
      >
        {t(key, values)}
      </small>
    );
  }
}

export * from "./types";
export default FormMessageError;
