/** @jsxImportSource @emotion/react */
import Config from "@/configs/config.export";
import { cartListType } from "@/types/types";
import { css } from "@emotion/react";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { frozenCartListState, generalCartListState } from "../recoil/cart";

export default function Badge() {
  const { baseUrl } = Config();

  const [frozenCart, setFrozenCart] =
    useRecoilState<cartListType>(frozenCartListState);
  const [generalCart, setGeneralCart] =
    useRecoilState<cartListType>(generalCartListState);
  const totalItem = frozenCart.length + generalCart.length;

  // 데이터 불러오기
  const accesstoken =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Nzk4NDIyNzYsInN1YiI6ImFjY2Vzcy10b2tlbiIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCI6dHJ1ZSwiZW1haWwiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiJ9.jKBsy0fIlgNO0gRDW23DHYUTBEKnx9MCmMcDUu894-Grg4TkAiyhd14Y0b3Ejos2gc-q2z3US_GEuyb_ukRr1Q";
  async function fetchGeneralData() {
    const generalResult = await axios.get(`${baseUrl}/api/cart/my_cart`, {
      headers: {
        Authorization: accesstoken,
      },
    });
    setGeneralCart(generalResult.data);
  }
  async function fetchFrozenData() {
    const frozenResult = await axios.get(`${baseUrl}/api/cart/my_cart/ice`, {
      headers: {
        Authorization: accesstoken,
      },
    });
    setFrozenCart(frozenResult.data);
  }
  useEffect(() => {
    fetchGeneralData();
    fetchFrozenData();
  }, []);

  const badge = css`
    position: absolute;
    right: 38px;
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
  `;

  return <p css={badge}>{totalItem}</p>;
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
