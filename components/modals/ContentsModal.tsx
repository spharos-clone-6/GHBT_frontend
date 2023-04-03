/** @jsxImportSource @emotion/react */

import ModalHeader from "@/components/ui/ModalHeader";
import RightArrowMenu from "@/components/ui/RightArrowMenu";
import ContentCategoryContainer from "@/components/widgets/ContentCategoryContainer";
import { firstCategory } from "@/data/StaticData";
import { accessTokenState } from "@/state/accessTokenState";
import { contentsModalState } from "@/state/contentsModalState";
import { css, keyframes } from "@emotion/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Contents() {
  const setContentsIsView = useSetRecoilState(contentsModalState);
  const contentsIsView = useRecoilValue(contentsModalState);
  const accessToken = useRecoilValue(accessTokenState);
  const [animation, setAnimation] = useState<boolean>(true);

  const animate = keyframes`
    from {
      transform: translateX(-100vw);
      background-color: white;
    }

    to {
      transform: translateX(0);
      background-color: white;
    }
  `;

  const animate2 = keyframes`
    from {
      transform: translateX(0);
      background-color: white;
    }

    to {
      transform: translateX(-100vw);
      background-color: white;
    }
  `;

  const modalOnStyle = css`
    position: fixed;
    background-color: var(--color-white);
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    animation: ${animate} 0.5s ease-out;
  `;

  const modalOffStyle = css`
    position: fixed;
    background-color: var(--color-white);
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    animation: ${animate2} 0.5s ease-out;
  `;

  const closeModal = () => {
    setAnimation(false);
    setTimeout(() => setContentsIsView(false), 500);
  };

  return (
    <div
      css={animation ? modalOnStyle : modalOffStyle}
      style={{ backgroundColor: "white" }}
    >
      <ModalHeader setModalOpen={closeModal} />
      <section className="contents-head">
        {/*본문*/}
        {accessToken ? (
          <div className="contents-msg">
            <div className="msg-title">Welcome !</div>
            <p style={{ fontSize: "1rem" }}>
              온라인 스토어에 오신 것을 환영합니다.
            </p>
          </div>
        ) : (
          <div className="contents-msg">
            <div className="msg-title">Sign in to Online Store</div>
            <div>
              <Link href="/login" onClick={closeModal}>
                <ins>로그인</ins>
              </Link>{" "}
              후 이용해 보세요.
            </div>
          </div>
        )}

        <hr className="contents-line" />
      </section>
      {/* 제품 카테고리 */}
      <ContentCategoryContainer />
      {/*기획전/베스트 이동*/}
      <section id="nav-event-best">
        <div onClick={closeModal}>
          <RightArrowMenu
            menuName={"기획전"}
            link={`/event?category=${firstCategory.event}`}
            fontType="strong"
            description="진행중인 기획전을 만나보세요."
          />
        </div>

        <hr style={{ margin: "15px 0" }} />
        <div onClick={closeModal}>
          <RightArrowMenu
            menuName={"베스트"}
            link={`/best?category=${firstCategory.best}`}
            fontType="strong"
            description="스타벅스의 베스트 상품을 만나보세요."
          />
        </div>
      </section>
    </div>
  );
}

// const styleA = css`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   z-index: 1;
//   text-align: center;
//   padding: 0;
//   margin: 0;
//   border-top: 1px solid #e2e2e2;
//   box-shadow: 0 -3px 0.3em 3px rgba(139, 139, 139, 0.08);
//   background-color: var(--color-white);
//   animation: ${divAnimate} 1s;
// `;
