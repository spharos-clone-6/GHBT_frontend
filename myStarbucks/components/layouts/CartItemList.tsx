import React, { useEffect, useState } from "react";
import CartItem from "../ui/CartItem";
import { DUMMY_ITEM_LIST } from "@/data/StaticData";
import { RecoilRoot, RecoilState, useRecoilState } from "recoil";
import { itemList } from "../recoil/cart";
import axios from "axios";
import { IcartList } from "@/types/types";
import CartControlBar from "../widgets/CartControlBar";

export default function CartItemList(props: {
  cartList: IcartList;
  title: string;
}) {
  const [cartList, setCartList] = useRecoilState<IcartList>(itemList);
  // useEffect(() => {
  //   setCartList(DUMMY_ITEM_LIST);
  // }, [cartList]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await axios.get(
  //       `http://backend.grapefruit-honey-black-tea.shop/api/product/search/${query.keyword}`
  //     );
  //     setCartList(result.data);
  //   };
  //   getData();

  return (
    <>
      <section id="cart-list">
        <div className="select">
          <div className="select-items">
            <input type="checkbox" />
            <span>{props.title}</span>
          </div>
        </div>
        {props.cartList &&
          props.cartList.map((item) => <CartItem item={item} key={item.id} />)}
      </section>
      <div className="cart-delivery">
        <p>상품 {cartList.length}건 326,000원 + 배송비 0원 = 총 326,000원</p>
        <p>무료배송</p>
        <a href="">더 담으러 가기</a>
      </div>
    </>
  );
}
