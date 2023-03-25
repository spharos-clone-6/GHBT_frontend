import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { recentSearchKeyword, useRecent } from "@/state/recentKeywordState";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>; //setIsView의 타입
}

export default function SearchTop() {
  // 검색화면 상단 검색창

  const router = useRouter();
  const [word, setWord] = useState<string>("");

  const [recentSearchKeywords, setRecentSearchKeywords] = useRecent();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resultHandler();
  };

  const typingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);

    console.log(word);
  };

  function resultHandler() {
    if (word === "") {
      alert("검색어를 입력해주세요");
    } else {
      setRecentSearchKeywords([...recentSearchKeywords, word]);
      router.push(`/search_result?keyword=${word}&bigCategory=${"전체"}`);
    }
  }

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
            <img src="/images/icons/search.svg" onClick={resultHandler} />
          </li>
          <li>
            <a href="javascript:window.history.back();">
              <img src="/images/icons/close.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
