import { recentSearchKeyword, useRecent } from "@/state/recentKeywordState";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";

type SearchedItem = {
  item?: string;
};

export default function LatestSearchItem({ item }: SearchedItem) {
  const router = useRouter();

  const [recentSearchKeywords, setRecentSearchKeywords] = useRecent();

  const onClickHandler = () =>
    router.push({
      pathname: "/search_result",
      query: {
        keyword: `${item}`,
        bigCategory: `${"전체"}`,
      },
    });

  const deleteHandler = () => {
    const res = recentSearchKeywords.filter((k) => k !== item);
    setRecentSearchKeywords([...res]);
  };

  return (
    <div className="keywords">
      <div onClick={onClickHandler}>{item}</div>
      <img src="/images/icons/close.png" onClick={deleteHandler} />
    </div>
  );
}
