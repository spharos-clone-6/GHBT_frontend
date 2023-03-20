import React, { useEffect, useState } from "react";

interface props {
  price: number;
  label?: string;
}

export default function ItemAmount({price, label='상품 주문 수량'}: props) {
  const [itemCount, setItemCount] = useState(1);
  const [isBtnValid, setIsBtnValid] = useState(false);

  const onClickAddHandler = () => {
    setItemCount(itemCount + 1);
  };

  const onClickMinusHandler = () => {
    setItemCount(itemCount - 1);
  };

  useEffect(() => {
    setIsBtnValid(itemCount > 1);
  }, [itemCount]);

  return (
    <section id="change-quantity">
      <div>
        <p>{label}</p>
        <div className="change">
          <div className="quantity">
            <button disabled={!isBtnValid} onClick={onClickMinusHandler}>
              <img src="/images/icons/minus.png" alt="" />
            </button>
            <div>{itemCount}</div>
            <button onClick={onClickAddHandler}>
              <img src="/images/icons/add.png" alt="" />
            </button>
          </div>
          <p>{`${(price * itemCount).toLocaleString("en")}원`}</p>
        </div>
      </div>
    </section>
  );
}
