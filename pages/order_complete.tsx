/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

export default function OrderComplete() {
  return (
    <div id="order-complete">
      <div css={layout}>
        <h1 style={{ margin: "0" }}> 주문이 완료되었습니다. </h1>
      </div>
    </div>
  );
}

const layout = css`
  background-color: white;
  padding: 60px 10px 10px 10px;
  margin: 0;
`;
