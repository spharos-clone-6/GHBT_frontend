import React, { useState } from "react";
import { useRouter } from "next/router";

export default function SearchTop() {
  // 검색화면 상단 검색창

  const router = useRouter();
  const [word, setWord] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?word=${word}`);
  };

  return (
    <div className="search-top">
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="검색어를 입력해 주세요."
            onChange={(e) => {
              setWord(e.target.value);
              console.log(word);
            }}
          />
        </form>
      </div>
      <div className="search-icons">
        <ul>
          <li>
            <img
              src="/images/icons/search.svg"
              type="button"
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: {
                    word: `${word}`,
                  },
                })
              }
              value="Push"
            />
          </li>
          <li>
            <img src="/images/icons/close.png" />
          </li>
        </ul>
      </div>
    </div>
  );
}
