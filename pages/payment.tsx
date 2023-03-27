import { cartOrder, deliveryPrice } from "@/components/recoil/cart";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import ModalHeader from "@/components/ui/ModalHeader";
import RightArrowMenu from "@/components/ui/RightArrowMenu";
import PayCoupon from "@/components/widgets/PayCoupon";
import PayDeliveryInfo from "@/components/widgets/PayDeliveryInfo";
import PayInfo from "@/components/widgets/PayInfo";
import PayMethod from "@/components/widgets/PayMethod";
import PayProductList from "@/components/widgets/PayProductList";
import React from "react";
import { useRecoilValue } from "recoil";

export default function payment() {
  const orderList = useRecoilValue(cartOrder);
  const deliveryP = useRecoilValue(deliveryPrice);
  console.log("결제할 물품 목록: ", orderList);
  console.log("배송비: ", deliveryP);

  let totalPrice = 0;
  orderList.map((item) => (totalPrice += item.product.price * item.quantity));
  console.log(orderList);
  console.log("총 가격: ", totalPrice);
  return (
    <>
      <section id="pay-title">
        <p className="title">결제하기</p>
      </section>
      <PayDeliveryInfo />
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
            <p className="title price">33,000원</p>
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
          33,000원 결제하기
        </Button>
      </BottomFixedContainer>
    </>
  );
}
