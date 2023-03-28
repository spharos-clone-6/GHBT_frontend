import { deliveryType } from "@/types/types";
import React from "react";

export default function DeliveryItem(props: { item: deliveryType }) {
  return (
    <section id="delivery-list">
      <input type="radio" name="deliver-place" />
      <div className="delivery-info">
        <div className="delivery-name">
          <div className="name">
            {props.item.receiver} ({props.item.addressNickname})
          </div>
          {props.item.isDefault ? <div className="is-primary">기본</div> : ""}
        </div>
        <p>
          ({props.item.zipCode}) {props.item.baseAddress}
          {props.item.detailAddress}
        </p>
        <p>{props.item.phoneNumber1}</p>
        <p>{props.item.notice}</p>
      </div>
      <a href="">수정</a>
    </section>
  );
}
