import React, { useEffect, useState } from "react";
import CartItem from "../ui/CartItem";
import { DUMMY_ITEM_LIST } from "@/data/StaticData";
import { RecoilRoot, RecoilState, useRecoilState } from "recoil";
import { itemList } from "../recoil/cart";
import axios from "axios";
import { cartList } from "@/types/types";
import CartControlBar from "../widgets/CartControlBar";

export default function CartItemList(props: { cartList: cartList }) {
  // const [cartList, setCartList] = useRecoilState<cartList>(itemList);
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
      {props.cartList &&
        props.cartList.map((item) => <CartItem item={item} key={item.id} />)}
    </>
  );
}
