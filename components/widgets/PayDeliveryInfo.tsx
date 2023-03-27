/** @jsxImportSource @emotion/react */
import { deliveryListType, deliveryType } from "@/types/types";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import DeliveryChangeModal from "../modals/DeliveryChangeModal";

interface delivery {
  deliveryList: deliveryListType;
  setDeliveryList: React.Dispatch<React.SetStateAction<deliveryListType>>;
  deliveryPlace: deliveryListType;
  setDeliveryPlace: React.Dispatch<React.SetStateAction<deliveryListType>>;
}

export default function PaymentDeliveryInfo({
  deliveryList,
  setDeliveryList,
  deliveryPlace,
  setDeliveryPlace,
}: delivery) {
  const [modalOpen, setModalOpen] = useState(false);

  const div = css`
    margin: 5px 0px;
    padding: 10px 0px;
    border-top: 1px solid rgba(128, 128, 128, 0.381);
  `;

  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section id="pay-delivery">
        <div className="delivery-info-title">
          <p>배송 정보</p>
          <div className="delivery-change" onClick={showModal}>
            변경
          </div>
          {modalOpen && (
            <DeliveryChangeModal
              setModalOpen={setModalOpen}
              deliveryList={deliveryList}
              setDeliveryList={setDeliveryList}
              deliveryPlace={deliveryPlace}
              setDeliveryPlace={setDeliveryPlace}
            />
          )}
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
