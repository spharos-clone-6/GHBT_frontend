import { productType } from '@/types/types'
import Link from 'next/link';
import React from 'react'
import ProductLabel from './ProductLabel';

type Item = {
  item: productType;
}

export default function ProductItemRow({ item }: Item) {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="chunsik-item">
        <img
          src={item.thumbnailUrl}
          alt={item.name}
        />
        <div className="chunsik-item-info">
          <ProductLabel
            isBest = {item.isBest}
            isNew = {item.isNew}
          />
          <p className="item-title">{item.name}</p>
          <p className="item-price">
            <span>{item.price.toLocaleString('ko-KR')}</span>원
          </p>
        </div>
      </div>
    </Link>
  )
}
