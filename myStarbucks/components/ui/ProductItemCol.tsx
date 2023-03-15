import { productType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ProductLabel from "./ProductLabel";

export default function ProductItemCol(props: {
  item: productType;
  idx: number;
}) {
  const { pathname } = useRouter();
  const { item, idx } = props;
  console.log(item)
  return (
    <Link href={`/product/${item.id}`}>
      <div className="product-item">
        {pathname === "/best" && (
          <div className="rank-label">
            <p>{idx + 1}</p>
          </div>
        )}
        <img src={item.thumbnailUrl} className="thumbnail" />
        <div className="product-item-info">
          <ProductLabel
            isBest = {item.isBest}
            isNew = {item.isNew}
          />
          <p className="product-item-name">{item.name}</p>
          <p className="product-item-price">
            {props.item.price.toLocaleString("ko-KR")}원
          </p>
        </div>
      </div>
    </Link>
  );
}
