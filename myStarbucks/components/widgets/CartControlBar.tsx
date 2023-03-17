import { cartList } from "@/types/types";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { checkAll, itemList } from "../recoil/cart";

export default function CartControlBar(handler: any) {
  const [cartList, setCartList] = useRecoilState<cartList>(itemList);
  const [checkedAll, setCheckedAll] = useRecoilState(checkAll);

  return (
    <div className="cart-select">
      <div className="select-all">
        <input
          id="checkAll"
          type="checkbox"
          checked={checkedAll}
          // onChange={checkAllHandler}
        />
        <span>전체 선택</span>
      </div>
      <div className="select-del">
        <a>선택삭제</a>
        <a>전체삭제</a>
      </div>
    </div>
  );
}
