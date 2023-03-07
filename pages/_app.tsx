import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";
import { ConfigProvider } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import AppLayout from "../src/layout/AppLayout";
import { useState } from "react";
import PageSign from "../pages/sign";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };

  const [login, setLogin] = useState(false);

  return (
    <ConfigProvider locale={koKR}>
      <AppLayout
        component={!login ? <PageSign /> : <Component {...pageProps} />}
      />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
    </ConfigProvider>
  );
}
