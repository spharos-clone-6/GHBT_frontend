import React from 'react'
import ProductItemCol from '../ProductItem/ProductItemCol'

export default function ProductContainerGrid() {
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
    <div className="product-container">
      {
        dummy.map((item, idx) => (
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
