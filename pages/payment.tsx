import { cartOrder, deliveryPrice } from "@/components/recoil/cart";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import RightArrowMenu from "@/components/ui/RightArrowMenu";
import PayCoupon from "@/components/widgets/PayCoupon";
import PayDeliveryInfo from "@/components/widgets/PayDeliveryInfo";
import PayInfo from "@/components/widgets/PayInfo";
import PayMethod from "@/components/widgets/PayMethod";
import PayProductList from "@/components/widgets/PayProductList";
import Config from "@/configs/config.export";
import { deliveryListType, deliveryType } from "@/types/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function payment() {
  const { baseUrl } = Config();
  const [deliveryList, setDeliveryList] = useState<deliveryListType>([]);
  const [deliveryPlace, setDeliveryPlace] = useState<deliveryListType>([]);

  const orderList = useRecoilValue(cartOrder);
  const deliveryP = useRecoilValue(deliveryPrice);

  let totalPrice = 0;
  orderList.map((item) => (totalPrice += item.product.price * item.quantity));

  // 배송지 데이터 불러오기
  const AT =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk5MTc5MjksInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.w0w0qf6e1VstsXCFizf8GN9ZNX0pwmSrp8SVQ0GldMLBCqsnPypGw3Idp-YwjGhAxxACeKVXufax0OToSTVMkQ";
  async function fetchDelivery() {
    const delivery = await axios.get(`${baseUrl}/api/shipping-address`, {
      headers: {
        Authorization: AT,
      },
    });
    console.log("대표 배송지 :", delivery.data.shippingAddress[0]);
    setDeliveryList(delivery.data.shippingAddress);
    setDeliveryPlace(delivery.data.shippingAddress[0]);
  }

  useEffect(() => {
    fetchDelivery();
  }, []);

  return (
    <>
      <section id="pay-title">
        <p className="title">결제하기</p>
      </section>
      {deliveryPlace && (
        <PayDeliveryInfo
          deliveryList={deliveryList}
          setDeliveryList={setDeliveryList}
          deliveryPlace={deliveryPlace}
          setDeliveryPlace={setDeliveryPlace}
        />
      )}

      <PayProductList itemList={orderList} />
      <PayCoupon />
      <RightArrowMenu
        iconSrc=""
        menuName="모바일 상품권"
        link=""
        fontType="bold"
        padding="15px 10px"
      />
      <PayMethod />
      <RightArrowMenu
        iconSrc=""
        menuName="현금영수증"
        link=""
        fontType="bold"
        padding="15px 10px"
      />
      <PayInfo itemPrice={totalPrice} delivery={deliveryP} />
      <section id="pay-info">
        <div className="pay">
          <div className="pay-price">
            <p className="title">최종 결제 금액</p>
            <p className="title price">
              {(totalPrice + deliveryP).toLocaleString("en")}원
            </p>
          </div>
        </div>
        <div className="notice">
          <div className="notice-box">
            위 주문 내용을 확인하였으며, 결제에 동의합니다.
            <br />
            (전자상거래법 8조 2항)
          </div>
        </div>
      </section>
      <BottomFixedContainer>
        <Button btnType="button" btnEvent={() => alert("구매?")}>
          {(totalPrice + deliveryP).toLocaleString("en")}원 결제하기
        </Button>
      </BottomFixedContainer>
    </>
  );
}
