/** @jsxImportSource @emotion/react */
import React from 'react'
import {css} from '@emotion/react'

import { ReactNode } from "react";

export default function Button(props: 
  { children: ReactNode, btnType: "button" | "submit" | "reset" | undefined, 
  type?: string, btnEvent: React.MouseEventHandler<HTMLButtonElement> | undefined }) {
  const { btnType, children, type, btnEvent } = props

  let backgroundColor = 'var(--color-light-green)'
  let fontColor = 'var(--color-white)'
  let border = 'none'

  if(type === 'disabled') {
    backgroundColor = 'var(--color-gray-button)'
    fontColor = 'var(--color-white)'
  } else if(type === 'white') {
    backgroundColor = 'var(--color-white)'
    fontColor = 'var(--color-light-green)'
    border = '1px solid var(--color-light-green)'
  }

  const style = css`
    border-radius: 30px;
    width: 90%;
    height: 35px;
    background-color: var(--color-light-green);
    border: none;
    color: var(--color-white);
    background-color: ${backgroundColor};
    border: ${border};
    color: ${fontColor};
    margin: 15px 0;
    letter-spacing: -0.2px;
  `

  return (
    <button
      css={style}
      type={btnType}
      onClick={btnEvent}
    >
      { children }
    </button >
  )
}
