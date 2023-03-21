import { productType } from '@/types/types';
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
