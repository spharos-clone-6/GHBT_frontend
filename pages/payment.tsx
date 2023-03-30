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
import { AT } from "@/data/StaticData";
import Link from "next/link";

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

  console.log("주문내역: ", orderList);
  // 배송지 데이터 불러오기
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
      purchaseList: orderList.map(function (item) {
        let pId = String(item.product.productId);
        if (pId === "undefined") pId = String(item.product.id);
        return {
          productId: Number(pId),
          productName: item.product.name,
          productQuantity: item.quantity,
          productPrice: item.product.price,
        };
      }),
      shippingAddress: `부산시`,
      // shippingPrice: deliveryP,
      paymentType: `${payMethod}`,
      couponId: 1,
      couponPrice: 1,
      cashReceipts: "현금영수증",
      totalPrice: totalPrice + deliveryP,
    });
  }, [deliveryPlace, payMethod]);

  const purchase = async () => {
    console.log("==========주문서==========");
    console.log(receipt);
    const result = await axios.post(
      "https://backend.grapefruit-honey-black-tea.shop/api/purchase",
      {
        purchaseList: receipt.purchaseList,
        shippingAddress: receipt.shippingAddress,
        paymentType: receipt.paymentType,
        couponPrice: receipt.couponPrice,
        couponId: receipt.couponId,
        cashReceipts: receipt.cashReceipts,
        totalPrice: receipt.totalPrice,
      },
      {
        headers: {
          Authorization: AT,
        },
      }
    );
    console.log("이동할 URL: ", result.data.next_redirect_pc_url);
    window.location.href = result.data.next_redirect_pc_url;
  };

  useEffect(() => {});

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
