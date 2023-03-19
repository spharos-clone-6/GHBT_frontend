import CartItemList from "@/components/layouts/CartItemList";
import { checkAll, itemList } from "@/components/recoil/cart";
import CartControlBar from "@/components/widgets/CartControlBar";
import { DUMMY_ITEM_LIST } from "@/data/StaticData";
import { cartItem, IcartList } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CartEmpty from "../components/widgets/CartEmpty";

export default function cart() {
  const [cartList, setCartList] = useRecoilState<IcartList>(itemList);
  const [checkedAll, setCheckedAll] = useRecoilState(checkAll);

  // 비동기 -> 동기 처리 : 장바구니 목록 불러오기 - api연동 필요함

  useEffect(() => {
    setCartList(DUMMY_ITEM_LIST);
  }, [cartList]);

  const frozenItemList = cartList.filter((item) =>
    item.name.includes("케이크")
  );
  const generalItemList = cartList.filter(
    (item) => !item.name.includes("케이크")
  );
  console.log("frozen item : ", frozenItemList);
  console.log("general item : ", generalItemList);

  return (
    <>
      {cartList.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart-container">
          <section id="cart-header">
            <p className="title">장바구니</p>
            <CartControlBar />
          </section>

          <CartItemList cartList={generalItemList} title={"일반상품"} />
          <CartItemList cartList={frozenItemList} title={"냉동상품"} />

          {/* 최종 금액 */}
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
      )}
    </>
  );
}
