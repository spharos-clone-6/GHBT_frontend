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
