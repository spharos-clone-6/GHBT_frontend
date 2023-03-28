/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import ModalHeader from "../ui/ModalHeader";
import BottomFixedContainer from "../ui/BottomFixedContainer";
import Button from "../ui/Button";
import { deliveryListType } from "@/types/types";
import DeliveryItem from "../ui/DeliveryItem";

interface deliveryChange {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deliveryList: deliveryListType;
  setDeliveryList: React.Dispatch<React.SetStateAction<deliveryListType>>;
  deliveryPlace: deliveryListType;
  setDeliveryPlace: React.Dispatch<React.SetStateAction<deliveryListType>>;
}

export default function DeliveryChangeModal({
  setModalOpen,
  deliveryList,
  setDeliveryList,
  deliveryPlace,
  setDeliveryPlace,
}: deliveryChange) {
  const modalStyle: Object = {
    position: "fixed",
    backgroundColor: "var(--color-white)",
    top: "0",
    left: "0",
    zIndex: 999,
    width: "100%",
    height: "100%",
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div style={modalStyle}>
      <ModalHeader headerName="배송지 변경" setModalOpen={setModalOpen} />
      <section id="delivery-header">
        <p>배송지 선택</p>
        <a href="">
          <img src="./assets/images/icons/search.svg" alt="" />
          <span>새 배송지 추가</span>
        </a>
      </section>
      {deliveryList.map((item, index) => (
        <DeliveryItem
          item={item}
          key={index}
          setDeliveryPlace={setDeliveryPlace}
        />
      ))}
      <BottomFixedContainer>
        <Button btnType="button" btnEvent={closeModal}>
          변경하기
        </Button>
      </BottomFixedContainer>
    </div>
  );
}
