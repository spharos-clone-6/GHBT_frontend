import { useRouter } from "next/router";
import React from "react";

export default function LatestSearchItem({ item }) {
  const router = useRouter();

  return (
    <div className="keywords">
      <div
        type="button"
        onClick={() =>
          router.push({
            pathname: "/category-search",
            query: {
              word: `#${item}`,
            },
          })
        }
      >
        {item}
      </div>
      <img src="/images/icons/close.png" />
    </div>
  );
}
