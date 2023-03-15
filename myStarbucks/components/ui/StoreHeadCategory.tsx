import React from "react";

export default function StoreHeadCategory() {
  return (
    <>
      <div className="header-sub" id="search-result-category">
        <nav>
          <ul>
            <li className="active">
              <a href="">전체</a>
            </li>
            <li>
              <a href="">케이크</a>
            </li>
            <li>
              <a href="" className="hide">
                텀블러/보온병
              </a>
            </li>
            <li>
              <a href="" className="hide">
                머그/컵
              </a>
            </li>
            <li>
              <a href="" className="hide">
                라이프스타일
              </a>
            </li>
            <li>
              <a href="" className="hide">
                티/커피용품
              </a>
            </li>
            <li>
              <a href="" className="hide">
                세트
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
