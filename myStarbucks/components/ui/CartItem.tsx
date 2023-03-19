import React, { useState } from "react";
import { cartItem } from "@/types/types";
import ItemAmount from "./ItemAmount";
import OrderChangeModal from "../modals/OrderChangeModal";

export default function CartItem(props: { item: cartItem }) {
  const [checked, setCheked] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="cart-product">
      <input type="checkbox" />
      <div>
        <div className="item-info">
          <img src="/images/products/cake.jpg" alt="" className="product-img" />
          <div>
            <p className="name">{props.item.name}</p>
            <p className="price">{props.item.price.toLocaleString("en")}원</p>
          </div>
          <img src="/images/icons/close.png" alt="" className="close-icon" />
        </div>
        <div className="count">
          <p>수량: 1개</p>
        </div>
        <div className="item-price">
          <p>주문 금액</p>
          <p>33,000원</p>
        </div>
        <div className="item-purchase">
          <button onClick={showModal}>주문 수정</button>
          {modalOpen && (
            <OrderChangeModal setModalOpen={setModalOpen} item={props.item} />
          )}
          <button>바로 구매</button>
        </div>
      </div>
    </div>
  );
}
