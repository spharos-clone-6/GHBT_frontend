import React from "react";
import { useRecoilState } from "recoil";
import { checkAll } from "../recoil/cart";

export default function CartControlBar(handler: any) {
  const [checkedAll, setCheckedAll] = useRecoilState(checkAll);

  const checkAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked === true ? setCheckedAll(false) : setCheckedAll(true);
    console.log(checkedAll);
  };

  return (
    <div className="cart-select">
      <div className="select-all">
        <input id="checkAll" type="checkbox" onChange={checkAllHandler} />
        <span>전체 선택</span>
      </div>
      <div className="select-del">
        <a>선택삭제</a>
        <a>전체삭제</a>
      </div>
    </div>
  );
}
