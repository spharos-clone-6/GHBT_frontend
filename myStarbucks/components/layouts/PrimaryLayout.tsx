import React, { Children, useState } from "react";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import ProductContainer from "@/components/layouts/ProductContainer";
import EventBanner from "@/components/widgets/EventBanner";
import SubHeader from "./SubHeader";
import { useRouter } from "next/router";
import LoginModal from "../modals/LoginModal";

import { RecoilRoot, useRecoilValue } from "recoil";
import { loginModalState } from "@/state/loginModalState";

export default function PrimaryLayout(props: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const [isView, setIsView] = useState<Boolean>(true);
  console.log(pathname);
  // const isLoginModal = useRecoilValue<Boolean>(loginModalState);
  return (
    <>
      <LoginModal isView={isView} setIsView={setIsView} />
      <head />
      <div className="container">
        <header>
          <MainHeaderTop isView={isView} setIsView={setIsView} />
          <MainHeaderBottom />
          {pathname === "/best" || pathname === "/event" ? <SubHeader /> : ""}
        </header>
        {props.children}
      </div>
    </>
  );
}
