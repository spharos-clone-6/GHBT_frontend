import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "public/css/style.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
    {pathname === "/search" ? <Component {...pageProps} />
    :
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>}
    </>

  );
}
