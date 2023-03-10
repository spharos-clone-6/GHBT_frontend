import { productType } from '@/types/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductItemCol from '../ui/ProductItemCol'

export default function ProductContainerGrid() {
  const [ itemList, setItemList ] = useState<any>();
  const { query } = useRouter();

  const getData = async () => {
    const result= await axios.get(`http://backend.grapefruit-honey-black-tea.shop/api/product/search-category/${query.category}`)
    console.log(result.data)
    setItemList(result.data);
  }

  useEffect(() => {
    getData();
  },[])

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
// function useEffect(arg0: () => void, arg1: never[]) {
//   throw new Error('Function not implemented.');
// }

