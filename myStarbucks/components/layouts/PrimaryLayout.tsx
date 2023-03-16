import React, { Children, useState } from "react";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import SubHeader from "./SubHeader";
import { useRouter } from "next/router";
import LoginModal from "../modals/LoginModal";

import { RecoilRoot, useRecoilValue } from "recoil";
import { loginModalState } from "@/state/loginModalState";
import SearchModal from "@/components/modals/SearchModal";
import SearchResultInfo from "../widgets/SearchResultInfo";

export default function PrimaryLayout(props: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const { query } = useRouter();
  const [isView, setIsView] = useState<Boolean>(false);
  const keyword = query.keyword;
  // const isLoginModal = useRecoilValue<Boolean>(loginModalState);

  const mainMenu = ["/", "/event", "/best", "/mypage"];
  return (
    <>
      {/* <SearchModal isView={isView} setIsView={setIsView} /> */}
      <LoginModal isView={isView} setIsView={setIsView} />
      <div className="container">
        <header>
          <MainHeaderTop isView={isView} setIsView={setIsView} />
          {pathname === "/search_result" ? <SearchResultInfo keyword={keyword} /> : ""}
          {mainMenu.includes(pathname) ? <MainHeaderBottom /> : ""}
          {pathname === "/best" || pathname === "/event" ? <SubHeader /> : ""}
        </header>
        {props.children}
      </div>
    </>
  );
}
