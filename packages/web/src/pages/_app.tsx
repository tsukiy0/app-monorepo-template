import React from "react";
import type { AppProps } from "next/app";
import { ServiceContextProvider } from "../contexts/ServiceContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ServiceContextProvider>
      <Component {...pageProps} />
    </ServiceContextProvider>
  );
};

export default MyApp;
