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
    setIsView(true);
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

  useEffect(() => {
    if (router.pathname === "/store_all") {
      setModalOpen(false);
    }
  }, [router.pathname]);

  return (
    <div className="header-top">
      <div className="menu-icon">
        {router.pathname === "/store" ||
        router.pathname.includes("/product") ||
        router.pathname === "/cart" ||
        router.pathname === "/payment" ? (
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
          {router.pathname === "/payment" ? (
            <li className="close-icon">
              <img src="assets/images/icons/menu.svg" alt="" />
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
