import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>; //setIsView의 타입
}

export default function SearchTop({ isView, setIsView }: ChildProps) {
  // 검색화면 상단 검색창

  const router = useRouter();
  const [word, setWord] = useState<string>();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search_result?keyword=${word}&bigCategory=${"전체"}`);
  };

  const typingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleCloseModal = () => {
    setIsView(false);
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
                router.push(
                  `/search_result?keyword=${word}&bigCategory=${"전체"}`
                )
              }
            />
          </li>
          <li onClick={handleCloseModal}>
            <img src="/images/icons/close.png" />
          </li>
        </ul>
      </div>
    </div>
  );
}
