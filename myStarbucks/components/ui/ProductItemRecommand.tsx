import { productType } from '@/types/types'
import React from 'react'

type Item = {
  item: productType;
}

const ProductContainerRecommand = ({ item }:Item) => {
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
            <span>{item.price.toLocaleString('ko-KR')}</span>원
          </p>
        </div>
      </div>
  )
}


export default ProductContainerRecommand
