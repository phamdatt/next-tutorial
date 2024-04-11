"use client";

import React, { useEffect, useState, Suspense } from "react";

import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { WebVitals } from "../helpers/web-vitals";
import { I18nextProvider } from "react-i18next";
import i18n from "@/helpers/i18n";
import { getData } from "@/helpers/local-storage/local-storage";
import i18nInstance from "@/helpers/i18n";

persistStore(store);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        let result = await getData("locale");
        if (!result) return;
        i18nInstance.changeLanguage(result);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  WebVitals();
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PrimeReactProvider>
          {!isLoading && <React.StrictMode>{children}</React.StrictMode>}
        </PrimeReactProvider>
      </Provider>
    </I18nextProvider>
  );
}
export default AppProvider;
