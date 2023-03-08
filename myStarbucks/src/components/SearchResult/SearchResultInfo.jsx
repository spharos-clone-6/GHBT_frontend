import React from "react";

export default function SearchResultInfo({ keyword }) {
  return (
    <div className="header-sub search-info">
      <p>"</p>
      <p className="serach-keyword">{keyword}</p>"의 검색결과
      <p />
    </div>
  );
}
