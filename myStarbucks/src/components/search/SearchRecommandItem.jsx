import { useRouter } from "next/router";
import React from "react";

export default function SearchRecommandItem({ item }) {
  const router = useRouter();

  return (
    <button
      className="tag-list-item"
      type="button"
      onClick={() =>
        router.push({
          pathname: "/search",
          query: {
            word: `${item}`,
          },
        })
      }
    >
      #{item}
    </button>
  );
}
