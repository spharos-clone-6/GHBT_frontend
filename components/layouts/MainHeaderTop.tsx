import React, { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Badge from "../ui/Badge";
import { useRecoilState } from "recoil";
import ContentsModal from "../modals/ContentsModal";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>;
}

export default function MainHeaderTop({ isView, setIsView }: ChildProps) {
  const router = useRouter();
  // console.log(router.pathname);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenLogin = () => {
    router.push("/login");
  };

  const handleOpenSearch = () => {
    setIsView(true);
  };

  const handleBack = () => {
    router.back();
  };

  const showModal = () => {
    setModalOpen(true);
  };

  // useEffect(() => {
  //   setCartList(DUMMY_ITEM_LIST);
  // }, []);

  return (
    <div className="header-top">
      <div className="menu-icon">
        {router.pathname === "/store" ||
        router.pathname.includes("/product") ||
        router.pathname === "/cart" ? (
          <img onClick={handleBack} src="/images/icons/left.png" alt="" />
        ) : (
          <div>
            <button onClick={showModal}>
              <img src="/images/icons/menu.svg" alt="" />
            </button>
            {modalOpen && <ContentsModal setModalOpen={setModalOpen} />}
          </div>
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
            {/* <Badge /> */}
            <Link href="/cart">
              <img src="/images/icons/shopping-cart.svg" />
            </Link>
          </li>
          <Link href="/login">
            <img src="/images/icons/close.png" />
          </Link>
        </ul>
      </nav>
    </div>
  );
}
function setCartList(
  DUMMY_ITEM_LIST: { id: number; name: string; price: number; amount: number }[]
) {
  throw new Error("Function not implemented.");
}
