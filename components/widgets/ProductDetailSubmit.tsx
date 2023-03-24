/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/Button";
import ItemAmount from "../ui/ItemAmount";
import Price from "../ui/Price";

export default function ProductDetailSubmit(props: { price: number, productName: string, handleIsOpen: React.MouseEventHandler<HTMLDivElement>}) {
  const { price, productName, handleIsOpen } = props
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const totalPriceStyle = css`
    text-align: right;
    padding: 0 30px;
    margin-bottom: 80px;
    font-weight: bold;
  `

  return (
    <div onClick={handleIsOpen}>
      <ItemAmount price={price} label={productName} setTotalPrice={setTotalPrice}/>
      <p css={totalPriceStyle}>합계 <Price price={totalPrice} size='large'/></p>
    </div>
  );
}
