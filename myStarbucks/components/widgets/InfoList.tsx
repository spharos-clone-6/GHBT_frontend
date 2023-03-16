/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react'
import RightArrowMenu from '../ui/RightArrowMenu'

export default function InfoList() {
  const hr = css`
    opacity: 0.5;
    margin: 0;
  `

  return (
    <div css={css`
      padding-left: 20px;
      margin-bottom: 70px;
    `}>
      <RightArrowMenu
        menuName="이용조건 및 배송안내"
        link=""
        fontType='strong'
      />
      <hr css={hr}/>
      <RightArrowMenu
        menuName="상품제공정보고시"
        link=""
        fontType='strong'
      />
      <hr css={hr}/>
      <RightArrowMenu
        menuName="교환/반품 안내"
        link=""
        fontType='strong'
      />
      <hr css={hr}/>
      <RightArrowMenu
        menuName="취소/환불 안내"
        link=""
        fontType='strong'
      />
    </div>

  )
}
