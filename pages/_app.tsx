import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../src/layout/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return <AppLayout component={<Component {...pageProps} />} />;
}
