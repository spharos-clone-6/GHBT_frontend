import { useRouter } from "next/router";
import React from "react";

type SearchedItem = {
  item?: string;
};

export default function LatestSearchItem({ item }: SearchedItem) {
  const router = useRouter();

  const onClickHandler = () =>
    router.push({
      pathname: "/search_result",
      query: {
        keyword: `${item}`,
      },
    });

  return (
    <div className="keywords">
      <div
        // type="button"
        onClick={onClickHandler}
      >
        {item}
      </div>
      <img src="/images/icons/close.png" />
    </div>
  );
}
