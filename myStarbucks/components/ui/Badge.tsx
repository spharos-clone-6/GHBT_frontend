/** @jsxImportSource @emotion/react */
import { cartState } from '@/state/cartState';
import { css } from '@emotion/react';
import React from 'react'
import { useRecoilValue } from 'recoil';

export default function Badge() {
  const cartCnt = useRecoilValue(cartState);
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
  `

  return (
    <p css={badge}>{cartCnt}</p>
  )
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