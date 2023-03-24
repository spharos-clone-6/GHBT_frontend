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
  const totalCart = [frozenCart, generalCart];

  useEffect(() => {
    let check = true;
    let freezeCheck = true;
    frozenCart.find((item) => item.checked === false)
      ? (check = false)
      : (check = true);
    generalCart.find((item) => item.checked === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);
    if (check && freezeCheck) {
      setListAllCheck(true);
    } else {
      setListAllCheck(false);
    }
  }, [totalCart]);

  const handleAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setFrozenCart(
      frozenCart.map((item) => {
        const frozenResult = { ...item };
        frozenResult.checked = !check;
        return frozenResult;
      })
    );
    setGeneralCart(
      generalCart.map((item) => {
        const generalResult = { ...item };
        generalResult.checked = !check;
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
        >
          <img src="/images/icons/check.png" style={{ width: "100%" }} />
        </div>
        <p className="cart-select-btn">전체선택</p>
      </div>
      <div className="select-del">
        <a className="cart-select-btn">선택삭제</a>
        <a className="cart-select-btn">전체삭제</a>
      </div>
    </div>
  );
}