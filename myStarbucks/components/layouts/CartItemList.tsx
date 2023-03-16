import React, { useState } from "react";
import CartItem from "../ui/CartItem";
import { DUMMY_ITEM_LIST } from "@/data/StaticData";

export default function CartItemList() {
  const [itemList, setItemList] = useState();
  return (
    <>
      {DUMMY_ITEM_LIST &&
        DUMMY_ITEM_LIST.map((item) => <CartItem item={item} key={item.id} />)}
    </>
  );
}
