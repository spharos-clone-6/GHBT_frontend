/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import React, { Dispatch, SetStateAction } from "react";


export default function FilterKeyword(props: {keyword: string, filterKeyword: string[], setFilterKeyword: Dispatch<SetStateAction<string[]>> }) {
  const {keyword, filterKeyword, setFilterKeyword} = props
  const buttonStyle = css`
    vertical-align: baseline;
    background-color: var(--color-light-green);
    color: var(--color-white);
    border: none;
    border-radius: 3px;
    padding: 7px 15px;
    white-space: nowrap;
  `

  const handelDelete = (key: string) => {
    let list = filterKeyword.filter((el) => el !== key);
    setFilterKeyword([...list])
  }

  return (
    <button css={buttonStyle} onClick={() => handelDelete(keyword)}>
      <p>{keyword}</p>
      <p style={{marginLeft: '8px'}}>X</p>
    </button>
  )
}
