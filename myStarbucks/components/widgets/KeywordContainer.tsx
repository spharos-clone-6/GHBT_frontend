import { Router, useRouter } from "next/router";
import React, { Dispatch, SetStateAction } from "react";
import FilterKeyword from "../ui/FilterKeyword";

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

  return (
    <>
      {filterKeyword && (
        <div id="search-result-filter" style={{ height: "32px" }}>
          {filterKeyword.map((keyword, idx) => (
            <FilterKeyword
              key={idx}
              keyword={keyword}
              setFilterKeyword={setFilterKeyword}
              filterKeyword={filterKeyword}
              volumeKeyword={volumeKeyword}
              setVolumeKeyword={setVolumeKeyword}
              priceKeyword={priceKeyword}
              setPriceKeyword={setPriceKeyword}
              categoryKeyword={categoryKeyword}
              setCategoryKeyword={setCategoryKeyword}
              seasonKeyword={seasonKeyword}
              setSeasonKeyword={setSeasonKeyword}
            />
          ))}
        </div>
      )}
    </>
  );
}
