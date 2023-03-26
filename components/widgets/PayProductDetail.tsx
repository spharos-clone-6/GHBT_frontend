/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { cartListType } from "@/types/types";

interface orderItems {
  detailOn: boolean;
  itemList: cartListType;
}

export default function PayProductDetail({ detailOn, itemList }: orderItems) {
  const productDetails = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #f4f4f4;
  `;

  const img = css`
    width: 70px;
    height: 70px;
    border-radius: 15%;
    margin: 10px 20px 10px 0px;
    border: 1px solid rgba(128, 128, 128, 0.381);
  `;
  console.log("맵돌릴 아이템: ", itemList);

  return (
    <>
      {detailOn &&
        itemList.map((item) => (
          <div css={productDetails}>
            <img
              src={`https://storage.googleapis.com/ghbt/product_thumbnail/${item.product.thumbnailUrl}`}
              alt=""
              css={img}
            />
            <div>
              <p>{item.product.name}</p>
              <p style={{ color: "var(--color-gray-text)", fontSize: "11px" }}>
                주문수량: {item.quantity}개
              </p>
              <p style={{ fontWeight: "700" }}>34,000원</p>
            </div>
          </div>
        ))}
      {!detailOn && (
        <div css={productDetails}>
          <img
            src={`https://storage.googleapis.com/ghbt/product_thumbnail/${itemList[0].product.thumbnailUrl}`}
            alt=""
            css={img}
          />
          <div>
            <p style={{ fontWeight: "700" }}>
              {itemList[0].product.name}외 {itemList.length - 1}개
            </p>
          </div>
        </div>
      )}
    </>
  );
}
