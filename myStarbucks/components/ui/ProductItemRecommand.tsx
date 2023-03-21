import { productType } from '@/types/types'
import Link from 'next/link';
import React from 'react'
import Price from './Price';
import ProductLabel from './ProductLabel';

type Item = {
  item: productType;
}

const ProductContainerRecommand = ({ item }: Item) => {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="recommand-product-item">
        <div className="recommand-product-item__img">
          <img
            src={`https://storage.googleapis.com/ghbt/product_thumbnail/${item.thumbnailUrl}`}
            alt={item.name}
            width='150px'
          />
        </div>
        <div className="recommand-product-item__info">
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


export default ProductContainerRecommand
