import React, { useState } from "react";
import { cartItemType, cartListType } from "@/types/types";
import OrderChangeModal from "../modals/OrderChangeModal";
import { useRecoilState } from "recoil";
import { frozenCartListState, generalCartListState } from "../recoil/cart";

export default function CartItem(props: { item: cartItemType; title: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [cartList, setCartList] =
    props.title === "일반상품"
      ? useRecoilState<cartListType>(generalCartListState)
      : useRecoilState<cartListType>(frozenCartListState);

  console.log(props.item);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleCheck = () => {
    setCartList(
      cartList.map((item) => {
        const itemResult = { ...item };
        if (item.product.id === props.item.product.id) {
          itemResult.checked = !item.checked;
        }
        return itemResult;
      })
    );
  };

  return (
    <div className="cart-product">
      <div
        className={props.item.checked ? "sbCheckBoxOn" : "sbCheckBox"}
        onClick={handleCheck}
      ></div>
      <div style={{ width: "95%" }}>
        <div className="item-info">
          <img
            src={`https://storage.googleapis.com/ghbt/product_thumbnail/${props.item.product.thumbnailUrl}`}
            alt=""
            className="product-img"
          />
          <div className="info">
            <div>
              <p className="name">{props.item.product.name}</p>
              <p className="price">
                {props.item.product.price.toLocaleString("en")}원
              </p>
            </div>
            <img src="/images/icons/close.png" alt="" className="close-icon" />
          </div>
        </div>
        <div className="count">
          <p>수량: {props.item.quantity}개</p>
        </div>
        <div className="item-price">
          <p>주문 금액</p>
          <p>
            {(props.item.quantity * props.item.product.price).toLocaleString(
              "en"
            )}
            원
          </p>
        </div>
        <div className="item-purchase">
          <button onClick={showModal}>주문 수정</button>
          {modalOpen && (
            <OrderChangeModal setModalOpen={setModalOpen} item={props.item} />
          )}
          <button>바로 구매</button>
        </div>
      </div>
    </div>
  );
}
