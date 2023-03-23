/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
export default function PayProductDetail(props: { detailOn: boolean }) {
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

  return (
    <>
      {props.detailOn && (
        <div css={productDetails}>
          <img src="/images/products/category/5.jpg" alt="" css={img} />
          <div>
            <p>23 체리블라썸 플라워 머그앤소서 237ml </p>
            <p style={{ color: "var(--color-gray-text)", fontSize: "11px" }}>
              주문수량: 1개
            </p>
            <p style={{ fontWeight: "700" }}>34,000원</p>
          </div>
        </div>
      )}
      {!props.detailOn && (
        <div css={productDetails}>
          <img src="/images/products/category/5.jpg" alt="" css={img} />
          <div>
            <p style={{ fontWeight: "700" }}>
              23 체리블라썸 플라워 머그앤소서 237ml 외 2개
            </p>
          </div>
        </div>
      )}
    </>
  );
}
