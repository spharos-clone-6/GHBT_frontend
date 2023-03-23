import React from "react";

export default function PayProductList() {
  return (
    <section id="payment" className="pay-products">
      <details>
        <summary>
          <div>
            <p>상품내역</p>
            <div>
              <img src="/images/icons/arrow-down-sign-to-navigate.png" alt="" />
            </div>
          </div>
        </summary>
        <div className="product-details">
          <img src="/images/products/category/5.jpg" alt="" />
          <div>
            <p>23 체리블라썸 플라워 머그앤소서 237ml 외 1개</p>
            <p>주문수량: 1개</p>
            <p>34,000원</p>
          </div>
        </div>
      </details>
      <div className="product-summary">
        <img src="/images/products/category/5.jpg" alt="" />
        <div>
          <p style={{ fontWeight: 700 }}>23 리블라썸 플라워 머그앤소서 237ml</p>
        </div>
      </div>
    </section>
  );
}
