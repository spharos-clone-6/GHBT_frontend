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
            src={item.thumbnailUrl}
            alt={item.name}
          />
        </div>
        <div className="recommand-product-item__info">
          <div className='product-label'>
            <p className={item.isBest === true ? "item-best" : "item-best hide"}>Best</p>
            <p className={item.isNew === true ? "item-new" : "item-new hide"}>New</p>
          </div>
          <p className="item-title">{item.name}</p>
          <p className="item-price">
            <span>{item.price.toLocaleString('ko-KR')}</span>원
          </p>
        </div>
      </div>
  )
}


export default ProductContainerRecommand
