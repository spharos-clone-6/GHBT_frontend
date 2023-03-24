/** @jsxImportSource @emotion/react */
import { filterMenuType, filterSubCategoryType } from "@/types/types";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import React from "react";

export default function StoreHeadFilter(props: { data: filterSubCategoryType }) {
  const {data} = props

  let m = "0"
  if(data.id === 1) {
    m = "100px"
  }

  const headerStyle = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin: 0px;
    padding: 0px;
    height: 50px;`
  
  const navStyle = css`
    margin-top: ${m};
    display: flex;
  `

  const titleStyle = css`
    font-size: 0.8rem;
    padding: 3px 0px 0px 20px;
    width: 65px;
    text-align: center;
    font-weight: bolder;
  `

  const liStyle = css`
    padding: 20px 10px 20px 10px;
    text-align: center;
    list-style: none;
    padding: 20px 0px 20px 20px;
    font-size: 0.9rem;
    color: var(--color-gray-text);
    margin: 0 10px;
  `

  const ulStyle = css`
    justify-content: flex-start !important;
  `

  const router = useRouter()
  const {pathname, query} = useRouter()

  const handlePushLink = (name: string) => {
    router.push(`${pathname}?category=${query.category}&sub=${name}`);
  };

  

  return (
    <div className="header-sub">
      <nav css={navStyle}>
        <p className="cat-title" css={titleStyle}>{data.name}</p>
        <ul css={ulStyle}>
          {
            data.menus && data.menus.map((menu) => (
              <li key={menu.id} css={liStyle}
                onClick={() => handlePushLink(menu.name)}>
                {menu.name}
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}
