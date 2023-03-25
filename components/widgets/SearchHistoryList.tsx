import React from "react";
import { useRecoilValue } from "recoil";
import SearchHistoryItem from "../ui/SearchHistoryItem";
import { recentSearchKeyword } from "@/state/recentKeywordState";
import { useRecent } from "@/hooks/useRecent";

export default function SearchHistoryList() {
  const [keywords, setKeywords] = useRecent();

  function allDeleteHandler() {
    setKeywords([]);
  }
  return (
    <div className="search-latest">
      <div className="search-latest-title">
        <h3>최근 검색어</h3>
      </div>
      {keywords.length !== 0 ? (
        <div>
          <div className="search-latest-keywords">
            {keywords.map((k) => (
              <SearchHistoryItem item={k} />
            ))}
            <hr />
          </div>
          <div className="delete-keywords">
            <button onClick={allDeleteHandler}>전체삭제</button>
          </div>
        </div>
      ) : (
        <div>없음</div>
      )}
    </div>
  );
}
