/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from 'next/link'
import React from 'react'

export default function RightArrowMenu(props: { iconSrc?: string, menuName: string, link: string, fontType?: 'normal' | 'strong' }) {
  const {iconSrc, menuName, link, fontType} = props

  let fontWeight = 'normal';
  let fontSize = '1rem';

  if(fontType === 'strong') {
    fontWeight = 'bold';
    fontSize = '1.2rem'
  }

  const menu = css`
    padding: 10px;
    display: block;
  `

  const linkStyle = css`
    text-decoration: none;
    color: var(--color-soft-black);
    letter-spacing: 0.7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `

  const name = css`
    display: inline;
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    margin: 2px;
  `

  return (
    <div css={menu}>
      <Link href={link} css={linkStyle}>
        <div className="menu-info">
          <img
            className="icon"
            src={iconSrc}
          />
          <p css={name}>{menuName}</p>
        </div>
        <img
          className="arrow"
          src="/images/icons/arrow-point-to-right.png"
        />
      </Link>
    </div>
  )
}
