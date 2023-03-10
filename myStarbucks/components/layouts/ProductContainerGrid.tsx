import { productType } from '@/types/types';
import React from 'react'
import ProductItemCol from '../ui/ProductItemCol'

export default function ProductContainerGrid() {
  const dummy: productType[] = [
    {
      id: 1,
      name: "23 SS 체리 밸류 로맨틱 텀블러 355ml",
      price: 32000,
      thumbnailUrl: "/images/products/01.png",
      isBest: false,
      isNew: false,
    },
    {
      id: 2,
      name: "테스트2",
      price: 17000,
      thumbnailUrl: "/images/products/01.png",
      isBest: true,
      isNew: false,
    }
  ];
  return (
    <div className="product-container">
      {
        dummy && dummy.map((item, idx) => (
          <ProductItemCol
            key={item.id}
            item={item}
            idx={idx}
          />
        ))
      }
    </div>
  )
}
