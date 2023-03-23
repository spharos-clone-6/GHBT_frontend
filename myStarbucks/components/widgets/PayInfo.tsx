import React from "react";

export default function PayInfo() {
  return (
    <section id="pay-info">
      <div>
        <p>결제 정보</p>
      </div>
      <div className="pay">
        <div className="pay-price">
          <p className="title">주문 금액</p>
          <p className="title price">33,000원</p>
        </div>
        <div className="pay-price">
          <p>상품 금액</p>
          <p className="price">33,000원</p>
        </div>
        <div className="pay-price">
          <p>배송비</p>
          <p className="price">0원</p>
        </div>
      </div>
      <div className="pay">
        <div className="pay-price">
          <p className="title">할인 금액</p>
          <p className="title price">0원</p>
        </div>
        <div className="pay-price">
          <p>상품 할인</p>
          <p className="price">0원</p>
        </div>
      </div>
      <div className="pay">
        <div className="pay-price">
          <p className="title">결제 금액</p>
          <p className="title price">33,000원</p>
        </div>
        <div className="pay-price">
          <p>모바일 상품권</p>
          <p className="price">0원</p>
        </div>
      </div>
    </section>
  );
}
