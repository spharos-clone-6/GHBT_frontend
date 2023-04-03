/** @jsxImportSource @emotion/react */
import Config from "@/configs/config.export";
import { cartListType } from "@/types/types";
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { frozenCartListState, generalCartListState } from "../../state/cart";
import { AT } from "@/data/StaticData";

export default function Badge() {
  const [isUser, setIsUser] = useState(true);
  const { baseUrl } = Config();

  const [frozenCart, setFrozenCart] =
    useRecoilState<cartListType>(frozenCartListState);
  const [generalCart, setGeneralCart] =
    useRecoilState<cartListType>(generalCartListState);
  const totalItem = frozenCart.length + generalCart.length;

  // 데이터 불러오기
  async function fetchGeneralData() {
    try {
      const generalResult = await axios.get(`${baseUrl}/api/cart/my_cart`, {
        headers: {
          Authorization: AT,
        },
      });
      setGeneralCart(generalResult.data);
    } catch (ex: any) {
      if (ex.response && ex.response.status === 401) {
        console.log("비회원");
        setIsUser(false);
      }
    }
  }
  async function fetchFrozenData() {
    try {
      const frozenResult = await axios.get(`${baseUrl}/api/cart/my_cart/ice`, {
        headers: {
          Authorization: AT,
        },
      });
      setFrozenCart(frozenResult.data);
    } catch (ex: any) {
      if (ex.response && ex.response.status === 401) {
        console.log("비회원");
        setIsUser(false);
      }
    }
  }

  useEffect(() => {
    fetchGeneralData();
    fetchFrozenData();
  }, []);

  const badge = css`
    position: absolute;
    right: 44px;
    top: 8px;
    border-radius: 50%;
    background-color: var(--color-light-green);
    text-align: center;
    font-size: smaller;
    color: white;
    width: 1rem;
    height: 1rem;
    margin: 0;
    z-index: 100;
    opacity: 1 !important;
  `;

  return <>{isUser && <p css={badge}>{totalItem}</p>}</>;
}

/**
 * 값 바꿀 페이지에서
 * const [cart, setCart] = useRecoilState<number>(cartState)
 * cart -> 배지에 보일 숫자, setCart -> 숫자 조정하는거
 * <button onClick={()=>setCart(cart+1)}> 이런 형식으로 적용
 *
 * 값을 읽어 오기만 할 때는 useRecoilState 대신 useRecoilValue 사용
 * 값을 바꾸기만 할 때는 useSetRecoilState 사용
 *
 * setCart = useStateRecoilState<number>(cartState); 요렇게 쓰면 됨
 *
 */
