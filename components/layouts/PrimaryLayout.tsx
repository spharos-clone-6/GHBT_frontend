import React, { Children, useState } from "react";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import SubHeader from "./SubHeader";
import { useRouter } from "next/router";
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
      <div className="container">
        {pathname !== "/login" && (
          <header>
            <MainHeaderTop />
            {pathname === "/search_result" && (
              <SearchResultInfo keyword={keyword} />
            )}
            {mainMenu.includes(pathname) ? <MainHeaderBottom /> : ""}
            {pathname === "/best" || pathname === "/event" ? <SubHeader /> : ""}
          </header>
        )}
        {props.children}
      </div>
    </>
  );
}
