import { productType } from "@/types/types";
import React from "react";

export default function ProductItemCol(props: { item: productType, idx: number }) {
  return (
    <div className="product-item">
      <div className="rank-label">
        <p>{props.idx + 1}</p>
      </div>
      <img src={props.item.imgSrc} className="thumbnail" />
      <div className="product-item-info">
        <p className={props.item.isBest === 0 ? "item-best":"item-best hide"}>Best</p>
        <p className="product-item-name">{props.item.title}</p>
        <p className="product-item-price">
          {props.item.price.toLocaleString("ko-KR")}
        </p>
      </div>
    </div>
  );
}
