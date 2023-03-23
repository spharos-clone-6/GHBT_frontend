import { productType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Price from "./Price";
import ProductLabel from "./ProductLabel";

export default function ProductItemCol(props: {
  item: productType;
  idx: number;
}) {
  const { pathname } = useRouter();
  const { item, idx } = props;
  return (
    <Link href={`/product/${item?.productId}`}>
      <div className="product-item">
        {pathname === "/best" && (
          <div className="rank-label">
            <p>{idx + 1}</p>
          </div>
        )}
        <img
          src={`https://storage.googleapis.com/ghbt/product_thumbnail/${item?.thumbnailUrl}`}
          className="thumbnail"
        />
        <div className="product-item-info">
          <ProductLabel isBest={item?.isBest} isNew={item?.isNew} />
          <p className="product-item-name">{item?.name}</p>
          <p className="product-item-price">
            <Price price={item?.price} />
          </p>
        </div>
      </div>
    </Link>
  );
}
