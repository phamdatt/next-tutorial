"use client";

import React from "react";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { WebVitals } from "../helpers/web-vitals";
import { I18nextProvider } from "react-i18next";
import i18n from "@/helpers/i18n";
persistStore(store);

function AppProvider({ children }: { children: React.ReactNode }) {
  WebVitals();
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PrimeReactProvider>
          <React.StrictMode>{children}</React.StrictMode>
        </PrimeReactProvider>
      </Provider>
    </I18nextProvider>
  );
}
export default AppProvider;
