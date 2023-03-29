import { deliveryListType, deliveryType } from "@/types/types";
import React, { useState } from "react";

interface change {
  item: deliveryType;
  setDeliveryPlace: React.Dispatch<React.SetStateAction<deliveryListType>>;
}

export default function DeliveryItem({ item, setDeliveryPlace }: change) {
  const handleChange = (e: any) => {
    console.log(`선택한 값 : ${e.target.value}`);
    setDeliveryPlace([item]);
  };

  return (
    <section id="delivery-list">
      <input
        type="radio"
        name="deliver-place"
        value={item.id}
        onChange={handleChange}
      />
      <div className="delivery-info">
        <div className="delivery-name">
          <div className="name">
            {item.receiver} ({item.addressNickname})
          </div>
          {item.isDefault ? <div className="is-primary">기본</div> : ""}
        </div>
        <p>
          ({item.zipCode}) {item.baseAddress}
          {item.detailAddress}
        </p>
        <p>{item.phoneNumber1}</p>
        <p>{item.notice}</p>
      </div>
      <a href="">수정</a>
    </section>
  );
}
