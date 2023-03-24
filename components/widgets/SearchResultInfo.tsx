import React from "react";

type SearchKeyword = {
  keyword?: string | string[];
};

export default function SearchResultInfo({
  keyword = "default",
}: SearchKeyword) {
  return (
    <div className="header-sub search-info">
      <p>"</p>
      <p className="serach-keyword">{keyword}</p>"의 검색결과
      <p />
    </div>
  );
}
