import { productType } from "@/types/types";
import { useEffect } from "react";
import NoItem from "../ui/NoItem";
import ProductItemCol from "../ui/ProductItemCol";

type Item = {
  itemList: productType[];
};

export default function ProductContainerGrid({ itemList = [] }: Item) {
  useEffect(() => {
    console.log(itemList);
  }, []);

  return (
    <>
      {itemList.length === 0 ? (
        <NoItem />
      ) : (
        <div className="product-container" style={{ minHeight: "95vh" }}>
          {itemList &&
            itemList.map((item: productType, idx: number) => (
              <ProductItemCol key={idx} item={item} idx={idx} />
            ))}
        </div>
      )}
    </>
  );
}
