import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import type { AppProps } from "next/app";
import "public/css/style.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}
