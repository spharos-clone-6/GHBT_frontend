import { recentSearchKeyword, useRecent } from "@/state/recentKeywordState";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";

type RecommandItem = {
  item?: string;
};

export default function SearchRecommandItem({ item = "" }: RecommandItem) {
  const router = useRouter();

  const [recentSearchKeywords, setRecentSearchKeywords] = useRecent();

  const onClickHandler = () => {
    if (item === "") {
      alert("검색어를 입력해주세요");
    } else {
      setRecentSearchKeywords([...recentSearchKeywords, item]);
      router.push(`/search_result?keyword=${item}&bigCategory=${"전체"}`);
    }
  };

  return (
    <button className="tag-list-item" type="button" onClick={onClickHandler}>
      #{item}
    </button>
  );
}
