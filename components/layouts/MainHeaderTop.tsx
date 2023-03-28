import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Badge from "../ui/Badge";
import { useRecoilState } from "recoil";
import ContentsModal from "../modals/ContentsModal";
import Image from "next/image";
import CloseIcon from "../ui/CloseIcon";
import { contentsModalState } from "@/state/contentsModalState";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function MainHeaderTop({ isView, setIsView }: ChildProps) {
  const router = useRouter();
  // console.log(router.pathname);
  const [contentsIsView, setContentsIsView] =
    useRecoilState<boolean>(contentsModalState);

  const handleOpenLogin = () => {
    setIsView(true);
  };

  const handleOpenSearch = () => {
    setIsView(true);
  };

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
          {router.pathname === "/payment" ? (
            <li className="close-icon">
              <Image
                src="/images/icons/menu.svg"
                alt=""
                width={20}
                height={20}
              />
            </li>
          ) : (
            <>
              <li>
                <Link href="/search">
                  <Image
                    src="/images/icons/search.svg"
                    alt="검색아이콘"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                {/* <Badge /> */}
                <Link href="/cart">
                  <Image
                    src="/images/icons/shopping-cart.svg"
                    alt="장바구니 아이콘"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li onClick={handleOpenLogin}>
                <CloseIcon />
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
