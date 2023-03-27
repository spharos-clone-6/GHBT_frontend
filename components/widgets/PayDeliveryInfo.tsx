/** @jsxImportSource @emotion/react */
import Config from "@/configs/config.export";
import { deliveryListType, deliveryType } from "@/types/types";
import { css } from "@emotion/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PaymentDeliveryInfo() {
  const { baseUrl } = Config();
  const [deliveryList, setDeliveryList] = useState<deliveryListType>([]);

  const div = css`
    margin: 5px 0px;
    padding: 10px 0px;
    border-top: 1px solid rgba(128, 128, 128, 0.381);
  `;

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
  }

  useEffect(() => {
    fetchDelivery();
  }, []);

  return (
    <>
      <section id="pay-delivery">
        <div className="delivery-info-title">
          <p>배송 정보</p>
          <Link href={"/delivery_change"}>
            <div className="delivery-change">변경</div>
          </Link>
        </div>
        <div className="delivery-info">
          <div className="delivery-name">
            <div className="name">
              {deliveryList[0] && deliveryList[0].receiver} (
              {deliveryList[0] && deliveryList[0].addressNickname})
            </div>
            <div className="is-primary">기본</div>
          </div>
          <p>
            ({deliveryList[0] && deliveryList[0].zipCode}){" "}
            {deliveryList[0] && deliveryList[0].baseAddress}{" "}
            {deliveryList[0] && deliveryList[0].detailAddress}
          </p>
          <p>{deliveryList[0] && deliveryList[0].phoneNumber1}</p>
        </div>
        <div css={div}>{deliveryList[0] && deliveryList[0].notice}</div>
      </section>
    </>
  );
}
