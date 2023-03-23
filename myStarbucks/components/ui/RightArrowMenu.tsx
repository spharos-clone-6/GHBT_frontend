/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";

export default function RightArrowMenu(props: {
  iconSrc?: string;
  menuName: string;
  link: string;
  fontType?: "normal" | "strong" | "bold";
  padding?: string;
  description?: string;
}) {
  const { iconSrc, menuName, link, fontType, description } = props;

  let fontWeight = "normal";
  let fontSize = "1rem";

  if (fontType === "strong") {
    fontWeight = "bold";
    fontSize = "1.2rem";
  } else if (fontType === "bold") {
    fontWeight = "bold";
    fontSize = "1rem";
  }

  const menu = css`
    padding: ${props.padding || `10px`};
    display: block;
  `;

  const linkStyle = css`
    text-decoration: none;
    color: var(--color-soft-black);
    letter-spacing: 0.7px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const name = css`
    display: inline;
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    margin: 2px;
  `;

  const descStyle = css`
    font-size: 1rem;
    display: block;
    margin: 2px;
    color: var(--color-gray-text);
  `;

  return (
    <div css={menu}>
      <Link href={link} css={linkStyle}>
        <div className="menu-info">
          <img className="icon" src={iconSrc} />
          <div>
            <p css={name}>{menuName}</p>
            <p css={descStyle}>{description}</p>
          </div>
        </div>
        <img className="arrow" src="/images/icons/arrow-point-to-right.png" />
      </Link>
    </div>
  );
}
