import React from "react";
import { useRecoilValue } from "recoil";
import SearchHistoryItem from "../ui/SearchHistoryItem";
import { recentSearchKeyword } from "@/state/recentKeywordState";

export default function SearchHistoryList() {
  const keywords = useRecoilValue(recentSearchKeyword);

  return (
    <div className="search-latest">
      <div className="search-latest-title">
        <h3>최근 검색어</h3>
      </div>
      <div className="search-latest-keywords">
        <SearchHistoryItem item="텀블러" />
      </div>
      <hr />
      <div className="delete-keywords">
        <button>전체삭제</button>
      </div>
    </div>
  );
}
