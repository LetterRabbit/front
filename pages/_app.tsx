import Script from "next/script";
import "../src/styles/globals.css";
import { ConfigProvider } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import AppLayout from "../src/layout/AppLayout";
import { useEffect, useState } from "react";
import PageSign from "./sign";

import { useStore } from "../src/lib/store";
import { useUser } from "../src/lib/useUser";
import axios from "axios";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }): any {
  // const getUser = useUser((state) => state.getUser);
  // const requestAuthUser = useUser((state) => state.requestAuthUser);

  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };

  const request = async () => {
    function getCookieValue(cookieName) {
      let cookieValue = "";
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookiePrefix = `${cookieName}=`;

        if (cookie.startsWith(cookiePrefix)) {
          cookieValue = cookie.substring(cookiePrefix.length, cookie.length);
          break;
        }
      }

      return cookieValue;
    }

    const token = getCookieValue("access_token");
    console.log("token", token);

    // console.log("dd", JSON.parse(a.access_token));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Cookie: token,
      },
      // withCredentials: true,

      // cookie: { token },
    };

    // console.log("document.Cookie", document.Cookie);

    try {
      const response: any = await axios.get(
        "http://54.180.58.203:8000/users/me",
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   request();
  // }, []);

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
