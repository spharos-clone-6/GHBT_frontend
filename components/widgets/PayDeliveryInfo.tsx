/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function PaymentDeliveryInfo() {
  const div = css`
    margin: 5px 0px;
    padding: 10px 0px;
    border-top: 1px solid rgba(128, 128, 128, 0.381);
  `;

  return (
    <>
      <section id="pay-delivery">
        <div className="delivery-info-title">
          <p>배송 정보</p>
          <a href="">
            <div className="delivery-change">변경</div>
          </a>
        </div>
        <div className="delivery-info">
          <div className="delivery-name">
            <div className="name">춘식이 (집)</div>
            <div className="is-primary">기본</div>
          </div>
          <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
          <p>010-1234-5678</p>
        </div>
        <div css={div}>배송메세지 표시공간</div>
      </section>
    </>
  );
}
