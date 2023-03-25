import React from "react";

export default function PayMethod() {
  return (
    <section id="pay-method">
      <div>
        <p>결제 수단</p>
      </div>
      <div className="pay-choice">
        <div>
          <input type="radio" name="pay" /> 스타벅스 카드
        </div>
        <div>
          <input type="radio" name="pay" /> 신용카드
        </div>
      </div>
    </section>
  );
}
