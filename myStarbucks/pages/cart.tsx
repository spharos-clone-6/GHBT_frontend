import CartItemList from "@/components/layouts/CartItemList";
import {
  frozenCartListState,
  generalCartListState,
} from "@/components/recoil/cart";
import CartControlBar from "@/components/widgets/CartControlBar";
import { cartItemType, cartListType } from "@/types/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CartEmpty from "../components/widgets/CartEmpty";

export default function cart() {
  const [frozenCart, setFrozenCart] =
    useRecoilState<cartListType>(frozenCartListState);
  const [generalCart, setGeneralCart] =
    useRecoilState<cartListType>(generalCartListState);

  const [totalQuantity, setTotalQuantity] = useState(0);

  // useEffect(() => {
  //   console.log("총 수량 : ", totalQuantity);
  // }, [totalQuantity]);

  // const defaultCartItemType = {
  //   isChecked: false,
  // };

  // 데이터 불러오기
  const accesstoken =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk0MDM3ODAsInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.pMEl7kZLc5hwsKubE1b5Fggg9ralxkIgNR7sT82sMJcf5dOOhiv3lIj0lLpmSvGfDVsGpqZ0izK0QCucTLGTsg";

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://backend.grapefruit-honey-black-tea.shop/api/cart/my_cart",
        {
          headers: {
            Authorization: accesstoken,
          },
        }
      );
      console.log("일반 상품 목록 :", result);
      setGeneralCart(result.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://backend.grapefruit-honey-black-tea.shop/api/cart/my_cart/ice",
        {
          headers: {
            Authorization: accesstoken,
          },
        }
      );
      console.log("냉동 상품 목록 :", result);
      setFrozenCart(result.data);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   setFrozenCart(
  //     frozenCart.map((item) => {
  //       const copyData = { ...item };
  //       copyData.isChecked = false;
  //       return copyData;
  //     })
  //   );
  //   setGeneralCart(
  //     generalCart.map((item) => {
  //       const copyData = { ...item };
  //       copyData.isChecked = false;
  //       return copyData;
  //     })
  //   );
  // }, []);

  useEffect(() => {
    setTotalQuantity(frozenCart.length + generalCart.length);
  }, []);

  return (
    <>
      {frozenCart.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart-container">
          <section id="cart-header">
            <p className="title">장바구니</p>
            <CartControlBar />
          </section>

          <CartItemList title={"일반상품"} />
          <CartItemList title={"냉동상품"} />

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
                  총 <span>{totalQuantity}</span>건 / 20건
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
