import React from 'react'

export default function ProductItemRecommand({item}) {
  return (
    <div className="recommand-product-item">
        <div className="recommand-product-item__img">
          <img
            src={item.imgSrc}
            alt={item.title}
          />
        </div>
        <div className="recommand-product-item__info">
          <p className="item-new">New</p>
          <p className="item-title">{item.title}</p>
          <p className="item-price">
            <span>{item.price}</span>원
          </p>
        </div>
      </div>
  )
}
