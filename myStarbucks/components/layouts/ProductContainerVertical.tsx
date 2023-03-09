import React from 'react'
import ProductItemRow from '../ui/ProductItemRow'

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
    },
    {
      id: "3",
      imgSrc: "/images/products/chunsik.png",
      title: "춘식컵",
      price: 10000,
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
