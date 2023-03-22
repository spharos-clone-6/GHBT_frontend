import CartItemList from "@/components/layouts/CartItemList";
import {
  frozenCartListState,
  generalCartListState,
} from "@/components/recoil/cart";
import CartControlBar from "@/components/widgets/CartControlBar";
import { cartListType } from "@/types/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Loader } from "semantic-ui-react";
import CartEmpty from "../components/widgets/CartEmpty";
// import "semantic-ui-css/semantic.min.css";

export default function cart() {
  const [frozenCart, setFrozenCart] =
    useRecoilState<cartListType>(frozenCartListState);
  const [generalCart, setGeneralCart] =
    useRecoilState<cartListType>(generalCartListState);
  const [isLoading, setIsLoading] = useState(true);

  // 데이터 불러오기
  const accesstoken =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk0ODcxODksInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.JD7Cq_WXlvnmO7PWMSVxVFJltHgYDnY3pWuNKHjXjWre-vR37Dio_EB2euwcH84C8S_2GVMFrKasPgkJU3OVNw";

  useEffect(() => {
    async function fetchGeneralData() {
      const generalResult = await axios.get(
        "https://backend.grapefruit-honey-black-tea.shop/api/cart/my_cart",
        {
          headers: {
            Authorization: accesstoken,
          },
        }
      );
      console.log("일반 상품 :", generalResult);
      setGeneralCart(generalResult.data);
    }
    async function fetchFrozenData() {
      const frozenResult = await axios.get(
        "https://backend.grapefruit-honey-black-tea.shop/api/cart/my_cart/ice",
        {
          headers: {
            Authorization: accesstoken,
          },
        }
      );
      console.log("냉동 상품 :", frozenResult);
      setFrozenCart(frozenResult.data);
      setIsLoading(false);
    }
    fetchGeneralData();
    fetchFrozenData();
  }, []);

  const totalCart = generalCart.length + frozenCart.length;
  console.log("총 수량 : ", generalCart.length + frozenCart.length);
  console.log("로딩: ", isLoading);

  return (
    <>
      {isLoading && <div style={{ padding: "300px 150px" }}>Loading</div>}
      {!isLoading &&
        (totalCart === 0 ? (
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
                  ``
                  <p>
                    총 <span>{totalCart}</span>건 / 20건
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
        ))}
    </>
  );
}
