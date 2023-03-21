import { IcartList } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { frozenCartListState, generalCartListState } from "../recoil/cart";

export default function CartControlBar() {
  const [frozenCart, setFrozenCart] =
    useRecoilState<IcartList>(frozenCartListState);
  const [generalCart, setGeneralCart] =
    useRecoilState<IcartList>(generalCartListState);
  const [listAllCheck, setListAllCheck] = useState(false);
  // const totalCart =

  useEffect(() => {
    let check = true;
    let freezeCheck = true;
    frozenCart.find((item) => item.isChecked === false)
      ? (check = false)
      : (check = true);
    generalCart.find((item) => item.isChecked === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);
    if (check && freezeCheck) {
      setListAllCheck(true);
    } else {
      setListAllCheck(false);
    }
  }, []);

  const handleAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setFrozenCart(
      frozenCart.map((item) => {
        const frozenResult = { ...item };
        frozenResult.isChecked = !check;
        return frozenResult;
      })
    );
    setGeneralCart(
      generalCart.map((item) => {
        const generalResult = { ...item };
        generalResult.isChecked = !check;
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
