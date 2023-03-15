import { productType } from '@/types/types'
import React from 'react'

type Item = {
  item: productType;
}

export default function ProductItemRow({ item }:Item) {
  return (
    <div className="chunsik-item">
      <img
        src={item.thumbnailUrl}
        alt={item.name}
      />
      <div className="chunsik-item-info">
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
