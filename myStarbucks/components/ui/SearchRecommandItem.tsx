import { useRouter } from "next/router";
import React from "react";

type RecommandItem = {
  item?: string;
};

export default function SearchRecommandItem({ item }: RecommandItem) {
  const router = useRouter();

  const onClickHandler = () =>
    router.push({
      pathname: "/search_result",
      query: {
        keyword: `#${item}`,
      },
    });

  return (
    <button className="tag-list-item" type="button" onClick={onClickHandler}>
      #{item}
    </button>
  );
}
