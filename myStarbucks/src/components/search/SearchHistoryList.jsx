import React from "react";
import LatestSearchItem from "./SearchHistoryItem";

export default function LatestSearchList() {
  return (
    <div className="search-latest">
      <div className="search-latest-title">
        <h3>최근 검색어</h3>
      </div>
      <div className="search-latest-keywords">
        <LatestSearchItem item="텀블러" />
      </div>
      <hr />
      <div className="delete-keywords">
        <button>전체삭제</button>
      </div>
    </div>
  );
}
