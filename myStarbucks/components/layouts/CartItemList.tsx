import React, { useEffect, useState } from "react";
import CartItem from "../ui/CartItem";
import { DUMMY_ITEM_LIST } from "@/data/StaticData";
import {
  RecoilRoot,
  RecoilState,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { checkAll, itemList } from "../recoil/cart";
import axios from "axios";
import { IcartList } from "@/types/types";
import CartControlBar from "../widgets/CartControlBar";

export default function CartItemList(props: {
  filteredCartList: IcartList;
  title: string;
}) {
  const filteredCartList = useRecoilValue(itemList);
  const [checkedCatAll, setCheckedCatAll] = useState(false);
  const [cartList, setCartList] = useRecoilState<IcartList>(itemList);
  // useEffect(() => {
  //   setCartList(DUMMY_ITEM_LIST);
  // }, [cartList]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await axios.get(
  //       `http://backend.grapefruit-honey-black-tea.shop/api/product/search/${query.keyword}`
  //     );
  //     setCartList(result.data);
  //   };
  //   getData();

  // const [todos, setTodos] = useRecoilState(state.todos)
  const isAllDone = cartList.every((cartList) => cartList.isChecked);
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setCartList((todos) =>
      todos.map((cartList) => {
        return {
          ...cartList,
          isChecked: true,
        };
      })
    );
  };

  return (
    <>
      <section id="cart-list">
        <div className="select">
          {/* 일반 / 냉동 일괄 선택 체크박스 */}
          <div className="select-items">
            <input
              type="checkbox"
              checked={isAllDone}
              onChange={handleToggle}
            />
            <span>{props.title}</span>
          </div>
        </div>
        {props.filteredCartList &&
          props.filteredCartList.map((item) => (
            <CartItem item={item} key={item.id} isChecked={checkedCatAll} />
          ))}
      </section>
      <div className="cart-delivery">
        <p>
          상품 {props.filteredCartList.length}건 326,000원 + 배송비 0원 = 총
          326,000원
        </p>
        <p>무료배송</p>
        <a href="">더 담으러 가기</a>
      </div>
    </>
  );
}
