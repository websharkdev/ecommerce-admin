import type { AppProps } from "next/app";

import "@/assets/styles/general.css";

import MaineProvider from "@/providers/MaineProvider";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <MaineProvider>
        <Component {...pageProps} />
      </MaineProvider>
    </ClerkProvider>
  );
};

export default MyApp;
