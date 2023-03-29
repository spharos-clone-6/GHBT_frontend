import { cartOrder, deliveryPrice } from "@/state/cart";
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
import { useRecoilState, useRecoilValue } from "recoil";
import Price from "@/components/ui/Price";
import { payReceipt } from "@/state/receipt";

export default function Payment() {
  const { baseUrl } = Config();
  const [deliveryList, setDeliveryList] = useState<deliveryListType>([]);
  const [deliveryPlace, setDeliveryPlace] = useState<deliveryListType>([]);
  const [payMethod, setPayMethod] = useState<string>("");

  const orderList = useRecoilValue(cartOrder);
  const deliveryP = useRecoilValue(deliveryPrice);
  const [receipt, setReceipt] = useRecoilState(payReceipt);

  let totalPrice = 0;
  orderList.map((item) => (totalPrice += item.product.price * item.quantity));

  // 배송지 데이터 불러오기
  const AT =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2ODAxMTM2NzAsInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.V-KnRVv85F6acHum_I2lOsDcKbB6TIdDjJIUB-QC5nTnWVU584Z9bjnQjcNiQgmKfV1TDPAumhr58KFROVTgxw";
  async function fetchDelivery() {
    const delivery = await axios.get(`${baseUrl}/api/shipping-address`, {
      headers: {
        Authorization: AT,
      },
    });
    console.log("대표 배송지 :", delivery.data.shippingAddress[0]);
    setDeliveryList(delivery.data.shippingAddress);
  }

  useEffect(() => {
    fetchDelivery();
  }, []);

  useEffect(() => {
    setDeliveryPlace([deliveryList[0]]);
  }, [deliveryList]);

  useEffect(() => {
    setReceipt({
      purchaseList: orderList.map((item) => ({
        productId: item.id,
        productName: item.product.name,
        productQuantity: item.quantity,
        productPrice: item.product.price,
      })),
      shippingAddress: `${
        deliveryPlace[0]?.baseAddress + deliveryPlace[0]?.detailAddress
      }`,
      shippingPrice: deliveryP,
      paymentType: `${payMethod}`,
      couponId: 0,
      couponPrice: 0,
      cashReceipts: "현금영수증",
      totalPrice: totalPrice + deliveryP,
    });
  }, [deliveryPlace, payMethod]);

  const purchase = async () => {
    console.log("주문서: ", receipt);
    const res = await axios.post(
      "http:/backend.grapefruit-honey-black-tea.shop/api/purchase",
      {
        receipt,
      },
      {
        headers: {
          Authorization: AT,
        },
      }
    );
    console.log(res);
  };

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
      <PayMethod method={payMethod} setMethod={setPayMethod} />
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
              <Price price={totalPrice + deliveryP} />
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
        <Button btnType="button" btnEvent={purchase}>
          <Price price={totalPrice + deliveryP} /> 결제하기
        </Button>
      </BottomFixedContainer>
    </>
  );
}
