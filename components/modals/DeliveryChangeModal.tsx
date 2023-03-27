/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import ModalHeader from "../ui/ModalHeader";
import BottomFixedContainer from "../ui/BottomFixedContainer";
import Button from "../ui/Button";

interface deliveryChange {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function delivery_change({ setModalOpen }: deliveryChange) {
  const modalStyle: Object = {
    position: "fixed",
    backgroundColor: "var(--color-white)",
    top: "0",
    left: "0",
    zIndex: 999,
    width: "100%",
    height: "100%",
  };

  const buttonContainer = css`
    display: flex;
    gap: 15px;
    padding: 0px 30px;
    align-items: center;
    justify-content: space-between;
  `;

  const submitPrice = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-weight: bolder;
    padding: 20px 30px 0px 30px;
  `;

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={modalStyle}>
      <ModalHeader headerName="배송지 변경" />
      <section id="delivery-header">
        <p>배송지 선택</p>
        <a href="">
          <img src="./assets/images/icons/search.svg" alt="" />
          <span>새 배송지 추가</span>
        </a>
      </section>
      <section id="delivery-list">
        <input type="radio" name="deliver-place" />
        <div className="delivery-info">
          <div className="delivery-name">
            <div className="name">춘식이 (집)</div>
            <div className="is-primary">기본</div>
          </div>
          <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
          <p>010-1234-5678</p>
          <p>부재시 문 앞에 놓아주세요.</p>
        </div>
        <a href="">수정</a>
      </section>
      <BottomFixedContainer>
        <Button btnType="button" btnEvent={closeModal}>
          변경하기
        </Button>
      </BottomFixedContainer>
    </div>
  );
}
