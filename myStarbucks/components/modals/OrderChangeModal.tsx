import { modal } from "@/types/types";
import React from "react";
import BottomFixedContainer from "../ui/BottomFixedContainer";
import Button from "../ui/Button";
import ItemAmount from "../ui/ItemAmount";
import ModalHeader from "../ui/ModalHeader";
import { cartItem } from "@/types/types";

interface orderChange {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: cartItem;
}

export default function OrderChangeModal({ setModalOpen, item }: orderChange) {
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
    <>
      <div style={modalStyle}>
        <ModalHeader setModalOpen={setModalOpen} />
        <div className="cart-product">
          <div className="item-info">
            <img src={item.img} alt="" className="product-img" />
            <div className="info">
              <div>
                <p className="name">{item.name}</p>
                <p className="price">{item.price.toLocaleString("en")}원</p>
              </div>
              <img
                src="/images/icons/blank.png"
                alt=""
                className="close-icon"
              />
            </div>
          </div>
        </div>
        <ItemAmount price={item.price} />
        <BottomFixedContainer>
          <p>주문금액</p>
          <p className="price">
            합계 <span>19,900원</span>
          </p>
          <Button btnType="button" btnEvent={closeModal}>
            확인
          </Button>
        </BottomFixedContainer>
      </div>
    </>
  );
}
