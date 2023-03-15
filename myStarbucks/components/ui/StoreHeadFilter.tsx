import React from "react";

interface filterList {
  id: number;
  name: string;
  value: Array<string>;
}

export default function StoreHeadFilter(props: { data: filterList }) {
  return (
    <div className="header-sub">
      <nav>
        <p className="cat-title">{props.data.name}</p>
        <ul>
          {props.data.value &&
            props.data.value.map((el, idx) => (
              <li key={idx}>
                {el}
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}