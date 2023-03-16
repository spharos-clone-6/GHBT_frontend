import React, { useState } from "react";
import { cartItem } from "@/types/types";
import { useRecoilState } from "recoil";
import { itemAmountState } from "../atoms";

export default function CartItem(props: { item: cartItem }) {
  const [isBtnValid, setBtnValid] = useState();
  const [amount, setAmount] = useRecoilState(itemAmountState);

  return (
    <div className="cart-product">
      <input type="checkbox" />
      <div>
        <div className="item-info">
          <img src="/images/products/cake.jpg" alt="" className="product-img" />
          <div>
            <p className="name">{props.item.name}</p>
            <p className="price">{props.item.price}원</p>
          </div>
          <a href="">
            <img
              src="/assets/images/icons/close.png"
              alt=""
              className="close-icon"
            />
          </a>
        </div>
        <div className="count">
          <p>수량: {props.item.amount}개</p>
        </div>
        <div className="item-price">
          <p>주문 금액</p>
          <p>{props.item.price}원</p>
        </div>
        <div className="item-purchase">
          <a href="">주문 수정</a>
          <a href="">바로 구매</a>
        </div>
      </div>
    </div>
  );
}
