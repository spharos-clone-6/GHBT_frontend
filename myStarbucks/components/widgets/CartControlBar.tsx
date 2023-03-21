import { cartListType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { frozenCartListState, generalCartListState } from "../recoil/cart";

export default function CartControlBar() {
  const [frozenCart, setFrozenCart] =
    useRecoilState<cartListType>(frozenCartListState);
  const [generalCart, setGeneralCart] =
    useRecoilState<cartListType>(generalCartListState);
  const [listAllCheck, setListAllCheck] = useState(false);
  // const totalCart =

  useEffect(() => {
    let check = false;
    let freezeCheck = false;
    frozenCart.find((item) => item.Checked === false)
      ? (check = false)
      : (check = true);
    generalCart.find((item) => item.Checked === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);
    if (!check || !freezeCheck) {
      setListAllCheck(false);
    } else {
      setListAllCheck(true);
    }
  }, []);

  const handleAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setFrozenCart(
      frozenCart.map((item) => {
        const frozenResult = { ...item };
        frozenResult.Checked = !check;
        return frozenResult;
      })
    );
    setGeneralCart(
      generalCart.map((item) => {
        const generalResult = { ...item };
        generalResult.Checked = !check;
        return generalResult;
      })
    );
  };

  return (
    <div className="cart-select">
      <div className="select-all">
        <div
          className={listAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
          onClick={() => handleAllCheck(listAllCheck)}
        ></div>
        <p className="cart-select-btn">전체선택</p>
      </div>
      <div className="select-del">
        <a className="cart-select-btn">선택삭제</a>
        <a className="cart-select-btn">전체삭제</a>
      </div>
    </div>
  );
}
