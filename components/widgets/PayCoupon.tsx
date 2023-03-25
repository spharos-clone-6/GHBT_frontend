import React from "react";

export default function PayCoupon() {
  return (
    <section id="coupon">
      <details>
        <summary>
          <div>
            <p>쿠폰 및 할인</p>
            <div>
              <img
                className="arrow"
                src="/images/icons/arrow-down-sign-to-navigate.png"
                alt=""
                style={{ width: "16px" }}
              />
            </div>
          </div>
        </summary>
        <div className="detail">
          <a href="">
            <div className="coupon-detail">
              <img src="/images/icons/discount.png" alt="" />
              <p>쿠폰</p>
            </div>
          </a>
        </div>
      </details>
    </section>
  );
}
