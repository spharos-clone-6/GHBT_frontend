import { categoryType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function SubHeader() {
  const router = useRouter();
  const { pathname, query } = useRouter();
  const [categoryList, setCatogoryList] = useState<categoryType[]>();

  const getCategory = async () => {
    let list: categoryType[] = [];
    if (pathname === "/best") {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/category`
      );
      result.data &&
        result.data.map(
          (c: categoryType) =>
            c.type === "대" && (c.tag = c.name) && list.push(c)
        );
      setCatogoryList(list);
    } else if (pathname === "/event") {
      const result = await axios.get(
        "http://backend.grapefruit-honey-black-tea.shop/api/event"
      );
      setCatogoryList(result.data);
    } else {
      const result = "";
    }
  };

  const handlePushLink = (name: string | undefined) => {
    if (name === undefined) {
      name = "라인프렌즈";
    }
    router.push(`${pathname}?category=${name}`);
  };

  useEffect(() => {
    getCategory();
  }, [pathname]);

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {categoryList &&
            categoryList.map((category: categoryType) => (
              <li
                key={category.id}
                className={query.category === category.tag ? "active" : ""}
                onClick={() => handlePushLink(category.tag)}
              >
                {category.name}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
