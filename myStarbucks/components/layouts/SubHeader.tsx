import { categoryType } from "@/types/types";
import { useRouter } from "next/router";
import React from "react";

export default function SubHeader() {
  const best: categoryType[] = [
    {
      id: 1,
      title: "케이크",
    },
    {
      id: 2,
      title: "텀블러/보온병",
    },
    {
      id: 3,
      title: "머그/컵",
    },
    {
      id: 4,
      title: "라이프스타일",
    },
    {
      id: 5,
      title: "티/커피용품",
    },
    {
      id: 6,
      title: "세트",
    },
  ];
  const event: categoryType[] = [
    {
      id: 1,
      title: "케이크",
    },
    {
      id: 2,
      title: "바리스타 춘식",
    },
    {
      id: 3,
      title: "핸디 데스크",
    },
    {
      id: 4,
      title: "별★ 적립 혜택",
    },
  ]



  const router = useRouter();
  const { pathname, query } = useRouter();

  const handlePushLink = (title: string) => {
    router.push(`${pathname}?category=${title}`);
  };

  let categoryList;
  pathname === '/best' ? categoryList = best : categoryList = event

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {categoryList && categoryList.map((category: categoryType) => (
            <li
              className={query.category === category.title ? "active" : ""}
              onClick={() => handlePushLink(category.title)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
