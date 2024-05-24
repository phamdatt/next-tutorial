"use client";
import React, { useEffect, useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { WebVitals } from "../helpers/web-vitals";
import Tailwind from "primereact/passthrough/tailwind";
import { I18nextProvider } from "react-i18next";
import i18nInstance from "@/helpers/i18n/client";
import Indicator from "@/components/client-components/Indicator";
persistStore(store);

function AppProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  WebVitals();
  useEffect(() => {
    try {
      i18nInstance.changeLanguage(locale);
    } finally {
      setIsLoading(false);
    }
  }, [locale]);
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18nInstance}>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          {isLoading ? (
            <Indicator />
          ) : (
            <React.StrictMode>{children}</React.StrictMode>
          )}
        </PrimeReactProvider>
      </I18nextProvider>
    </Provider>
  );
}
export default AppProvider;
