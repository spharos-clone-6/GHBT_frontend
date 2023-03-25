/** @jsxImportSource @emotion/react */
import React, { Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";

export default function KeywordContainer(props: {
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

  const handelDelete = (key: string) => {
    setFilterKeyword([...filterKeyword.filter((el) => el !== key)]);

    volumeKeyword.includes(key) &&
      setVolumeKeyword([...volumeKeyword.filter((el) => el !== key)]);
    priceKeyword.includes(key) &&
      setPriceKeyword([...priceKeyword.filter((el) => el !== key)]);
    categoryKeyword.includes(key) &&
      setCategoryKeyword([...categoryKeyword.filter((el) => el !== key)]);
    seasonKeyword.includes(key) &&
      setSeasonKeyword([...seasonKeyword.filter((el) => el !== key)]);
  };

  const buttonStyle = css`
    vertical-align: baseline;
    background-color: var(--color-light-green);
    color: var(--color-white);
    border: none;
    border-radius: 3px;
    padding: 7px 15px;
    white-space: nowrap;
  `;
  return (
    <>
      {filterKeyword && (
        <div id="search-result-filter" style={{ height: "32px" }}>
          {filterKeyword.map((keyword, idx) => (
            <button css={buttonStyle} onClick={() => handelDelete(keyword)}>
              <p>{keyword}</p>
              <p style={{ marginLeft: "8px" }}>X</p>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
