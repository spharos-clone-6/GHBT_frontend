import React, { useState } from "react";
import { cartItem } from "@/types/types";
import ItemAmount from "./ItemAmount";

export default function CartItem(props: { item: cartItem }) {
  const [checked, setCheked] = useState();

  const;

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
          <a href="">
            <img src="/images/icons/close.png" alt="" className="close-icon" />
          </a>
        </div>
        <ItemAmount price={props.item.price} />
        <div className="item-purchase">
          <a href="">주문 수정</a>
          <a href="">바로 구매</a>
        </div>
      </div>
    </div>
  );
}
