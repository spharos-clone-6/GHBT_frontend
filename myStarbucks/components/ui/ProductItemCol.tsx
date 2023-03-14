import { productType } from "@/types/types";
import { useRouter } from "next/router";
import React from "react";

export default function ProductItemCol(props: { item: productType, idx: number }) {
  const { pathname } = useRouter();

  return (
    <div className="product-item">
      {
        pathname === '/best' && (
          <div className="rank-label">
            <p>{props.idx + 1}</p>
          </div>
        )
      }
      <img src={props.item.thumbnailUrl} className="thumbnail" />
      <div className="product-item-info">
        <p className={props.item.isBest === true ? "item-best" : "item-best hide"}>Best</p>
        <p className="product-item-name">{props.item.name}</p>
        <p className="product-item-price">
          {props.item.price.toLocaleString("ko-KR")}원
        </p>
      </div>
    </div>
  );
}
