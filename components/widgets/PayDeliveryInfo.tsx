/** @jsxImportSource @emotion/react */
import Config from "@/configs/config.export";
import { css } from "@emotion/react";
import axios from "axios";

export default function PaymentDeliveryInfo() {
  const { baseUrl } = Config();

  const div = css`
    margin: 5px 0px;
    padding: 10px 0px;
    border-top: 1px solid rgba(128, 128, 128, 0.381);
  `;

  // const AT =
  //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk5MTc5MjksInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.w0w0qf6e1VstsXCFizf8GN9ZNX0pwmSrp8SVQ0GldMLBCqsnPypGw3Idp-YwjGhAxxACeKVXufax0OToSTVMkQ";
  // async function fetchDelivery() {
  //   const delivery = await axios.get(`${baseUrl}/api/cart/my_cart`, {
  //     headers: {
  //       Authorization: AT,
  //     },
  //   });
  //   console.log("배송지 :", delivery);
  // }

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
