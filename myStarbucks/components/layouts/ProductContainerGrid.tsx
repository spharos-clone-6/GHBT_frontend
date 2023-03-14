import { productType } from '@/types/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductItemCol from '../ui/ProductItemCol'

type Item = {
  itemList: productType[];
}

export default function ProductContainerGrid({ itemList }: Item) {
  return (
      <div className="product-container">
        {
          itemList && itemList.map((item: productType, idx: number) => (
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
