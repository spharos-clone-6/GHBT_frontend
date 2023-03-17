import CartItemList from "@/components/layouts/CartItemList";
import { checkAll, itemList } from "@/components/recoil/cart";
import CartControlBar from "@/components/widgets/CartControlBar";
import { DUMMY_ITEM_LIST } from "@/data/StaticData";
import { cartList } from "@/types/types";
import React, { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";

export default function cart() {
  const [cartList, setCartList] = useRecoilState<cartList>(itemList);
  const [checkedAll, setCheckedAll] = useRecoilState(checkAll);

  // 비동기 -> 동기 처리
  useEffect(() => {
    setCartList(DUMMY_ITEM_LIST);
  }, [cartList]);

  const checkAllHandler = (
    value: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCartList((prevState) => {
      return prevState.map((obj) => {
        return { ...obj, isChecked: value };
      });
    });
    setCheckedAll(value);
  };

  return (
    <>
      <div className="cart-container">
        <section id="cart-header">
          <p className="title">장바구니</p>
          <CartControlBar />
        </section>
        <section id="cart-list">
          <div className="select">
            <div className="select-items">
              <input type="checkbox" />
              <span>냉동 상품</span>
            </div>
          </div>

          {/* 장바구니 목록 */}
          <CartItemList cartList={cartList} />
        </section>
        <div className="cart-delivery">
          <p>상품 {cartList.length}건 326,000원 + 배송비 0원 = 총 326,000원</p>
          <p>무료배송</p>
          <a href="">더 담으러 가기</a>
        </div>
        {/* 상품금액 */}
        <section id="total-cart-price">
          <div>
            <div className="title-total-price">총 주문 금액</div>
            <div className="prices">
              <div className="cart-price">
                <p>상품 금액</p>
                <p className="price">33,000원</p>
              </div>
              <div className="cart-price">
                <p>할인 금액</p>
                <p className="price">0원</p>
              </div>
              <div className="cart-price">
                <p>배송비</p>
                <p className="price">3,000원</p>
              </div>
            </div>
            <div className="total-price">
              <p>최종 결제 금액</p>
              <p className="price">36,000원</p>
            </div>

            {/* 안내문 */}
            <div className="notice">
              <div className="notice-box">
                장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대
                2개월간 보관됩니다.
                <br />
                가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
              </div>
            </div>
          </div>
        </section>
        <section className="submit-container">
          {" "}
          {/*class="submit-container"*/}
          <div className="submit-box">
            <div className="cart-final">
              <p>
                총 <span>1</span>건 / 20건
              </p>
              <p className="price">36,000원</p>
            </div>
            <div className="buttons">
              <button>선물하기</button>
              <button>구매하기</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
