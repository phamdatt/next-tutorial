"use client";
import React, { useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { persistStore } from "redux-persist";
import { WebVitals } from "../helpers/web-vitals";
import Tailwind from "primereact/passthrough/tailwind";
persistStore(store);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  WebVitals();
  return (
    <Provider store={store}>
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        {!isLoading && <React.StrictMode>{children}</React.StrictMode>}
      </PrimeReactProvider>
    </Provider>
  );
}
export default AppProvider;
