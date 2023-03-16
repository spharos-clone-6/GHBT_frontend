/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

export default function BottomFixedContainer({ children }: Props) {
  const style = css`
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    text-align: center;
    padding: 0;
    margin: 0;
    border-top: 1px solid #e2e2e2;
    box-shadow: 0 -3px .3em 3px rgba(139, 139, 139, 0.08);
    background-color: var(--color-white);
  `
  
  return (
    <div css={style}>{children}</div>
  )
}
