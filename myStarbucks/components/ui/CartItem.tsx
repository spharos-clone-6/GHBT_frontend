import React, { useState } from "react";
import { cartItemType, cartListType } from "@/types/types";
import OrderChangeModal from "../modals/OrderChangeModal";
import { useRecoilState } from "recoil";
import { frozenCartListState, generalCartListState } from "../recoil/cart";
import axios from "axios";

export default function CartItem(props: { item: cartItemType; title: string }) {
  const [quantity, setQuantity] = useState(props.item.quantity);
  const [isItem, setIsItem] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartList, setCartList] =
    props.title === "일반상품"
      ? useRecoilState<cartListType>(generalCartListState)
      : useRecoilState<cartListType>(frozenCartListState);

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

  const deleteItem = async () => {
    const accesstoken =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk1ODA4NjEsInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.yt6f7kUlU3A47756lxTUIwGXz0RQDYCZJSuZF4WDDJu7iSO302jcBB-BsEoO8u4Iu2v7OThdaRh1LjRDlirbFg";
    await axios.delete(
      `https://backend.grapefruit-honey-black-tea.shop/api/cart/${props.item.id}`,
      {
        headers: {
          Authorization: accesstoken,
        },
      }
    );
    setIsItem(false);
  };

  return (
    <>
      {isItem ? (
        <div className="cart-product">
          <div
            className={props.item.checked ? "sbCheckBoxOn" : "sbCheckBox"}
            onClick={handleCheck}
          >
            <img src="/images/icons/check.png" style={{ width: "100%" }} />
          </div>
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
                <img
                  src="/images/icons/close.png"
                  alt=""
                  className="close-icon"
                  onClick={deleteItem}
                />
              </div>
            </div>
            <div className="count">
              <p>수량: {quantity}개</p>
            </div>
            <div className="item-price">
              <p>주문 금액</p>
              <p>
                {(
                  props.item.quantity * props.item.product.price
                ).toLocaleString("en")}
                원
              </p>
            </div>
            <div className="item-purchase">
              <button onClick={showModal}>주문 수정</button>
              {modalOpen && (
                <OrderChangeModal
                  setModalOpen={setModalOpen}
                  item={props.item}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
              )}
              <button>바로 구매</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
