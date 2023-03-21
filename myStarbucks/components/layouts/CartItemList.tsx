import React, { useEffect, useState } from "react";
import CartItem from "../ui/CartItem";
import { DefaultValue, useRecoilState } from "recoil";
import { cartListType } from "@/types/types";
import { frozenCartListState, generalCartListState } from "../recoil/cart";

export default function CartItemList(props: { title: string }) {
  const [cartItems, setCartItems] =
    props.title === "일반상품"
      ? useRecoilState<cartListType>(generalCartListState)
      : useRecoilState<cartListType>(frozenCartListState);
  const [listAllCheck, setListAllCheck] = useState(false);

  useEffect(() => {
    let check = false;
    cartItems.find((item) => item.Checked === false)
      ? (check = false)
      : (check = true);
    console.log("밑에: ", check);
    setListAllCheck(check);
  }, [cartItems]);

  const handleCartListAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setCartItems(
      cartItems.map((a) => {
        const cartResult = { ...a };
        cartResult.Checked = !check;
        return cartResult;
      })
    );
  };

  let listPrice = 0;
  // cartItems.map((item) => item.isChecked === true? (listPrice += ): ())

  return (
    <>
      <section id="cart-list">
        <div className="select">
          {/* 일반 / 냉동 일괄 선택 체크박스 */}
          <div className="select-items">
            <div
              className={listAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
              onClick={() => handleCartListAllCheck(listAllCheck)}
            ></div>
            <p className="cart-select-btn">{props.title}</p>
          </div>
        </div>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.product.id} title={props.title} />
        ))}
      </section>
      <div className="cart-delivery">
        <p>상품 {cartItems.length}건 326,000원 + 배송비 0원 = 총 326,000원</p>
        <p>무료배송</p>
        <a href="">더 담으러 가기</a>
      </div>
    </>
  );
}
