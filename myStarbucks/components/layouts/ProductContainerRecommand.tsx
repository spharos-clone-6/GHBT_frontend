import { productType } from '@/types/types';
import React from 'react'
import ProductItemRecommand from '../ui/ProductItemRecommand';

export default function ProductContainerRecommand(props: {sectionId: string, headerName: string}) {
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
    <section className="recommand" id={props.sectionId}>
      <h2>{props.headerName}</h2>
      <div className="recommand-product-list">
        {
          dummy.map((item, idx) => (
            <ProductItemRecommand
              key={idx}
              item = {item}
            />
          ))
        }
      </div>
    </section>
  )
}
