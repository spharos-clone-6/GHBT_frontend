import React from "react";

export default function ProductItemCol({ item, idx }) {
  return (
    <div className="product-item">
      <div className="rank-label">
        <p>{idx + 1}</p>
      </div>
      <img src={item.imgSrc} className="thumbnail" />
      <div className="product-item-info">
        <p className={item.isBest === 0 ? "item-best":"item-best hide"}>Best</p>
        <p className="product-item-name">{item.title}</p>
        <p className="product-item-price">
          {item.price.toLocaleString("ko-KR")}
        </p>
      </div>
    </div>
  );
}
