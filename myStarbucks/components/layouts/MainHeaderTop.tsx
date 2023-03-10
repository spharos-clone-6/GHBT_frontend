import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function MainHeaderTop({ isView, setIsView }: ChildProps) {
  const router = useRouter();

  console.log(isView);
  const handleOpenLogin = () => {
    console.log(isView);
    setIsView(true);
  };

  const handleOpenSearch = () => {
    setIsView(true);
  };

  return (
    <div className="header-top">
      <div className="menu-icon">
        {router.pathname === "/store" || false ? (
          <img src="/images/icons/left.png" alt="" />
        ) : (
          <Link href="/contents/contents">
            <img src="/images/icons/menu.svg" alt="" />
          </Link>
        )}
      </div>
      <h1>온라인 스토어</h1>
      <nav>
        <ul>
          <li onClick={handleOpenSearch}>
            <Link href="/search">
              <img src="/images/icons/search.svg" />
            </Link>
          </li>
          <li>
            <Link href="/cart/cart">
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
