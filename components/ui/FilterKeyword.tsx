/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Dispatch, SetStateAction } from "react";

export default function FilterKeyword(props: {
  keyword: string;
  filterKeyword: string[];
  setFilterKeyword: Dispatch<SetStateAction<string[]>>;
  volumeKeyword: string[];
  setVolumeKeyword: Dispatch<SetStateAction<string[]>>;
  priceKeyword: string[];
  setPriceKeyword: Dispatch<SetStateAction<string[]>>;
  categoryKeyword: string[];
  setCategoryKeyword: Dispatch<SetStateAction<string[]>>;
  seasonKeyword: string[];
  setSeasonKeyword: Dispatch<SetStateAction<string[]>>;
}) {
  const {
    keyword,
    filterKeyword,
    setFilterKeyword,
    volumeKeyword,
    setVolumeKeyword,
    priceKeyword,
    setPriceKeyword,
    categoryKeyword,
    setCategoryKeyword,
    seasonKeyword,
    setSeasonKeyword,
  } = props;

  const buttonStyle = css`
    vertical-align: baseline;
    background-color: var(--color-light-green);
    color: var(--color-white);
    border: none;
    border-radius: 3px;
    padding: 7px 15px;
    white-space: nowrap;
  `;

  const handelDelete = (key: string) => {
    let list = filterKeyword.filter((el) => el !== key);
    setFilterKeyword([...list]);

    setVolumeKeyword([...volumeKeyword.filter((el) => el !== key)]);
    setPriceKeyword([...priceKeyword.filter((el) => el !== key)]);
    setCategoryKeyword([...categoryKeyword.filter((el) => el !== key)]);
    setSeasonKeyword([...seasonKeyword.filter((el) => el !== key)]);
  };

  return (
    <button css={buttonStyle} onClick={() => handelDelete(keyword)}>
      <p>{keyword}</p>
      <p style={{ marginLeft: "8px" }}>X</p>
    </button>
  );
}