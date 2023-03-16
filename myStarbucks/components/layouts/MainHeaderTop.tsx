import React from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Badge from "../ui/Badge";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function MainHeaderTop({ isView, setIsView }: ChildProps) {
  const router = useRouter();
  console.log(router.pathname);

  const handleOpenLogin = () => {
    setIsView(true);
  };

  const handleOpenSearch = () => {
    setIsView(true);
  };

  const handleBack = () => {
    router.back();
  }

  return (
    <div className="header-top">
      <div className="menu-icon">
        {router.pathname === "/store" || router.pathname.includes('/product') || router.pathname === "/cart" ? (
          <img onClick={handleBack} src="/images/icons/left.png" alt="" />
        ) : (
          <Link href="/contents/contents">
            <img src="/images/icons/menu.svg" alt="" />
          </Link>
        )}
      </div>
      <Link href={"/"}>
        <h1>온라인 스토어</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/search">
              <img src="/images/icons/search.svg" />
            </Link>
          </li>
          <li>
            <Badge />
            <Link href="/cart">
              <img src="/images/icons/shopping-cart.svg" />
            </Link>
          </li>
          <li onClick={handleOpenLogin}>
            <img src="/images/icons/close.png" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
