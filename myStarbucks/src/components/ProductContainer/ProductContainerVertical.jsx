import React from 'react'
import ProductItemRow from '../ProductItem/ProductItemRow'

export default function ProductContainerVertical() {
  const dummy = [
    {
      id: "1",
      imgSrc: "/images/products/01.png",
      title: "23 SS 체리 밸류 로맨틱 텀블러 355ml",
      price: 32000,
    },
    {
      id: "2",
      imgSrc: "/images/products/01.png",
      title: "테스트2",
      price: 17000,
    }
  ];
  return (
    <div className='product-container-vertical'>
      {
        dummy.map((item, idx) => (
          <ProductItemRow
            key={idx}
            item={item}
          />
        ))
      }
    </div>
  )
}
