import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import ContentsModal from "../modals/ContentsModal";
import Image from "next/image";
import { contentsModalState } from "@/state/contentsModalState";
import { CgProfile } from "react-icons/cg";
import { GrCart, GrSearch } from "react-icons/gr";
import { accessTokenState } from "@/state/accessTokenState";
import Badge from "../ui/Badge";

export default function MainHeaderTop() {
  const router = useRouter();
  const [contentsIsView, setContentsIsView] =
    useRecoilState<boolean>(contentsModalState);
  const accessToken = useRecoilValue(accessTokenState);

  const handleBack = () => {
    if (router.pathname === "store") {
      router.push("/");
      setContentsIsView(false);
    } else router.back();
  };

  const showModal = () => {
    setContentsIsView(true);
  };

  const closeModal = () => {
    setContentsIsView(false);
  };

  return (
    <div className="header-top">
      <div className="menu-icon">
        {router.pathname === "/store" ||
        router.pathname.includes("/product") ||
        router.pathname === "/cart" ||
        router.pathname === "/payment" ? (
          <Image
            onClick={handleBack}
            src="/images/icons/left.png"
            alt=""
            width={20}
            height={20}
          />
        ) : (
          <div>
            <button onClick={showModal}>
              <Image
                src="/images/icons/menu.svg"
                alt=""
                width={20}
                height={20}
              />
            </button>
            {contentsIsView && <ContentsModal />}
          </div>
        )}
      </div>
      <Link href={"/"}>
        <h1 onClick={closeModal}>온라인 스토어</h1>
      </Link>
      <nav>
        <ul>
          {router.pathname === "/payment" ||
          router.pathname === "/delivery_register" ? (
            <li className="close-icon">
              <Image
                src="/images/icons/close.png"
                alt=""
                width={20}
                height={20}
              />
            </li>
          ) : (
            <>
              <li>
                <Link href="/search">
                  <GrSearch size={20} />
                </Link>
              </li>
              <li>
                {accessToken && <Badge />}
                <Link href="/cart">
                  <GrCart size={20} />
                </Link>
              </li>
              <li>
                <Link href={!accessToken ? "/login" : "/mypage"}>
                  <CgProfile size={20} />
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
