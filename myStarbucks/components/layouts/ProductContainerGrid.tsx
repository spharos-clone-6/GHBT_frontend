import { productType } from '@/types/types';
import React from 'react'
import ProductItemCol from '../ui/ProductItemCol'

export default function ProductContainerGrid() {
  const dummy: productType[] = [
    {
      id: 1,
      imgSrc: "/images/products/01.png",
      title: "23 SS 체리 밸류 로맨틱 텀블러 355ml",
      price: 32000,
      isBest: 0,
    },
    {
      id: 2,
      imgSrc: "/images/products/01.png",
      title: "테스트2",
      price: 17000,
      isBest: 1,
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
