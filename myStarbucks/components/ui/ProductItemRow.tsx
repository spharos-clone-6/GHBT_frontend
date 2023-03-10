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
        <p className="item-title">{item.name}</p>
        <p className="item-price">
          <span>{item.price.toLocaleString('ko-KR')}</span>원
        </p>
      </div>
    </div>
  )
}
