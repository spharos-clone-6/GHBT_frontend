/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/Button";
import ItemAmount from "../ui/ItemAmount";
import Price from "../ui/Price";

export default function ProductDetailSubmit(props: { price: number, productName: string, handleIsOpen: React.MouseEventHandler<HTMLDivElement>}) {
  const { price, productName, handleIsOpen } = props
  const [totalPrice, setTotalPrice] = useState<number>();
  const buttonContainer = css`
    display: flex;
    gap: 15px;
    padding: 0 30px;
    align-items: center;
  `
  const totalPriceStyle = css`
    text-align: right;
    padding: 0 30px;
    margin-bottom: 0;
    font-weight: bold;
  `
  const iconStyle = css`
    padding: 0;
    margin: 0;
    width: 30%;
  `
  
  return (
    <div onClick={handleIsOpen}>
      <ItemAmount price={price} label={productName} setTotalPrice={setTotalPrice}/>
      <p css={totalPriceStyle}>합계 <Price price={totalPrice} size='large'/></p>
      <div css={buttonContainer}>
        <div css={iconStyle}><img src="/images/icons/shopping-cart.svg" width={'60%'} /></div>
        <Button btnType="button" btnEvent={() => (alert('선물하기'))} type="white">선물하기</Button>
        <Button btnType="button" btnEvent={() => (alert('구매하기'))}>구매하기</Button>
      </div>
    </div>
  );
}
