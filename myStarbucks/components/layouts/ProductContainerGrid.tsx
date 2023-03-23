import { productType } from "@/types/types";
import { useEffect } from "react";
import ProductItemCol from "../ui/ProductItemCol";

type Item = {
  itemList: productType[];
};

export default function ProductContainerGrid({ itemList = [] }: Item) {
  useEffect(() => {
    console.log(itemList);
  }, []);

  return (
    <div className="product-container">
      {itemList &&
        itemList.map((item: productType, idx: number) => (
          <ProductItemCol key={idx} item={item} idx={idx} />
        ))}
    </div>
  );
}
