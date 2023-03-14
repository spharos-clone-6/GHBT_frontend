import { productType } from "@/types/types";
import { useRouter } from "next/router";
import React from "react";

export default function ProductItemCol(props: {
  item: productType;
  idx: number;
}) {
  const { pathname } = useRouter();
  const { item, idx } = props;
  return (
    <div className="product-item">
      {pathname === "/best" && (
        <div className="rank-label">
          <p>{idx + 1}</p>
        </div>
      )}
      <img src={item.thumbnailUrl} className="thumbnail" />
      <div className="product-item-info">
        <div className="product-label">
          <p className={item.isBest === true ? "item-best" : "item-best hide"}>
            Best
          </p>
          <p className={item.isNew === true ? "item-new" : "item-new hide"}>
            New
          </p>
        </div>
        <p className="product-item-name">{item.name}</p>
        <p className="product-item-price">
          {props.item.price.toLocaleString("ko-KR")}원
        </p>
      </div>
    </div>
  );
}
