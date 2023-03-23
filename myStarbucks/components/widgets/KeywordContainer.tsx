import React, { Dispatch, SetStateAction } from "react";
import FilterKeyword from "../ui/FilterKeyword";

export default function KeywordContainer(props: {
  filterKeyword: string[];
  setFilterKeyword: Dispatch<SetStateAction<string[]>>;
}) {
  const { filterKeyword, setFilterKeyword } = props;

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
            />
          ))}
        </div>
      )}
    </>
  );
}
