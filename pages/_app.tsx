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
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    console.log(window.Kakao.isInitialized());
  };

  return (
    <div>
      <AppLayout component={<Component {...pageProps} />} />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
    </div>
  );
}
