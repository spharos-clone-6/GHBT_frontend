/** @jsxImportSource @emotion/react */
import React from 'react'
import {css} from '@emotion/react'

import { ReactNode } from "react";

export default function Button(props: { children: ReactNode, btnType: "button" | "submit" | "reset" | undefined, btnEvent: React.MouseEventHandler<HTMLButtonElement> | undefined }) {
  const { btnType, children, btnEvent } = props
  const style = css`
    border-radius: 30px;
    width: 90%;
    height: 35px;
    background-color: var(--color-light-green);
    border: none;
    color: var(--color-white);
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
