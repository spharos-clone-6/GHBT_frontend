import { productType } from '@/types/types';
import React from 'react'
import ProductItemRow from '../ui/ProductItemRow'

export default function ProductContainerVertical() {
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
    <div className='product-container-vertical'>
      {
        dummy.map((item) => (
          <ProductItemRow
            key={item.id}
            item={item}
          />
        ))
      }
    </div>
  )
}
