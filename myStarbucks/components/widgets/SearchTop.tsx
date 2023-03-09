import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SearchTop() {
  // 검색화면 상단 검색창

  const router = useRouter();
  const [word, setWord] = useState<string>();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search_result?keyword=${word}`);
  };

  const typingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    console.log(word);
  };

  return (
    <div className="search-top">
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="검색어를 입력해 주세요."
            onChange={typingHandler}
          />
        </form>
      </div>
      <div className="search-icons">
        <ul>
          <li>
            <img
              src="/images/icons/search.svg"
              onClick={() =>
                router.push({
                  pathname: "/search_result",
                  query: {
                    keyword: `${word}`,
                  },
                })
              }
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
