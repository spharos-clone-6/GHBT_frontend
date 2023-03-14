import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";
import { productType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function best() {
  const [itemList, setItemList] = useState<productType[]>([]);
  const { query } = useRouter();

  console.log(query.category)

  useEffect(() => {
    const getData = async () => {
      console.log(query)
      const result = await axios.get(`http://backend.grapefruit-honey-black-tea.shop/api/product/search-category?search=${query.category}`)
      setItemList(result.data);
    };
    getData();

  }, [query])
  
  return (
    <div className="first-section-sub-one">
      <ProductContainerGrid 
        itemList={itemList}
      />
    </div>
  );
}
