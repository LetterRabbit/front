import Script from "next/script";
import "../src/styles/globals.css";
import { ConfigProvider } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import AppLayout from "../src/layout/AppLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { access } from "fs";
import { log } from "console";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }): any {
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };

  const request = async () => {
    // const token = getCookieValue("access_token");

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        // Cookie: `access_token=${token}`,
      },
    };
    try {
      const response = await axios.get(
        "https://letterforyou.link/users/me",
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request();
    // alert(document.cookie);
  }, []);

  return (
    <ConfigProvider locale={koKR}>
      <AppLayout component={<Component {...pageProps} />} />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
    </ConfigProvider>
  );
}
