import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/layout/AppLayout";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Kakao.init(process.env.KAKAO_KEY);
    console.log(process.env.KAKAO_KEY);
  }, []);

  return (
    <AppLayout component={<Component {...pageProps} />}>
      <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
    </AppLayout>
  );
}
