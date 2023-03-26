/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import PayProductDetail from "./PayProductDetail";
import { useRecoilValue } from "recoil";
import { cartOrder } from "../recoil/cart";
import { cartListType } from "@/types/types";

interface orderItems {
  itemList: cartListType;
}

export default function PayProductList({ itemList }: orderItems) {
  const orderList = useRecoilValue(cartOrder);
  const [detailOn, setDetailOn] = useState(false);

  const payContainer = css`
    background-color: #f4f4f4;
    padding: 10px 14px;
  `;

  const payProductHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f4f4f4;
  `;

  const showDetailHandler = () => {
    setDetailOn(!detailOn);
  };

  return (
    <div css={payContainer}>
      <div css={payProductHeader}>
        <div
          style={{ fontSize: "16px", fontWeight: "700", padding: "5px 0px" }}
        >
          상품내역
        </div>
        <div>
          <img
            className="arrow"
            src={
              detailOn
                ? "/images/icons/upload.png"
                : "/images/icons/arrow-down-sign-to-navigate.png"
            }
            alt=""
            style={{ width: "16px", height: "16px" }}
            onClick={showDetailHandler}
          />
        </div>
      </div>
      {/* 주문 상품 목록 받아와서 맵돌리기: summary on off 필요 */}
      <PayProductDetail
        detailOn={detailOn ? true : false}
        itemList={orderList}
      />
    </div>
  );
}
