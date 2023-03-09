import { useRouter } from "next/router";
import React from "react";

type LocationForSearch = {
  location?: string;
};

export default function SearchCategoryHeader({ location }: LocationForSearch) {
  const router = useRouter();
  console.log(router.asPath);
  const categoryList = [
    "케이크",
    "텀블러/보온병",
    "머그/컵",
    "라이프스타일",
    "티/커피용품",
    "세트",
  ];

  const dummyCategory = [
    {
      id: 1,
      title: "고구마케이크",
      category: "케이크",
    },
    {
      id: 2,
      title: "체리블라썸 텀블러",
      category: "텀블러/보온병",
    },
    {
      id: 3,
      title: "춘식이 머그",
      category: "머그/컵",
    },
    {
      id: 4,
      title: "레드벨벳 케이크",
      category: "케이크",
    },
  ];

  let searchedCategory = [];
  for (let item of dummyCategory) {
    searchedCategory.push(item["category"]);
  }

  let categorySet = new Set(searchedCategory);

  console.log(categorySet);

  return (
    <div className="header-sub first-section">
      <nav>
        <ul>
          {dummyCategory.map((category) => (
            <li
              // 카테고리 버튼 클릭시 초록색으로 활성화 표시
              className={
                router.asPath === `/${location}/` + category.id ? "active" : ""
              }
              // 클릭시 해당 카테고리 리스트로 이동
              onClick={() => {
                if (`${location}` === "best") {
                  router.push(`/${location}/${category.id}`);
                }
              }}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
