import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/layout/AppLayout";
import { ConfigProvider } from "antd";
import koKR from "antd/lib/locale/ko_KR";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={koKR}>
      <AppLayout component={<Component {...pageProps} />} />
    </ConfigProvider>
  );
}
