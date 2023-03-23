import React, { Dispatch, SetStateAction } from "react";
import FilterKeyword from "../ui/FilterKeyword";

interface filterList {
  id: number;
  name: string;
  value: Array<string>;
}

export default function StoreHeadFilter(props: { data: filterList, filterKeyword: string[], setFilterKeyword: Dispatch<SetStateAction<string[]>> }) {

  const {data, filterKeyword, setFilterKeyword} = props;
  const handleKeyword = (keyword: string) => {
    if(!filterKeyword.includes(keyword))
      setFilterKeyword([...filterKeyword, keyword]);
  }

  return (
    <div className="header-sub">
      <nav>
        <p className="cat-title">{data.name}</p>
        <ul>
          {data.value &&
            data.value.map((el, idx) => (
              <li key={idx} onClick={() => handleKeyword(el)}>
                {el}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
