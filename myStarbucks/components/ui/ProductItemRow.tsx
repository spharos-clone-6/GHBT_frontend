import { productType } from '@/types/types'
import Link from 'next/link';
import React from 'react'
import Price from './Price';
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
            <Price price={item.price} />
          </p>
        </div>
      </div>
    </Link>
  )
}
