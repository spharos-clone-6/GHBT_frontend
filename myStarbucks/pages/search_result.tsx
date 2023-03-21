import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StoreHeadCategory from "@/components/ui/StoreHeadCategory";
import StoreHeadFilter from "@/components/ui/StoreHeadFilter";
import { store_subhead } from "@/data/StaticData";
import SelectOrder from "@/components/ui/SelectOrder";
import axios from "axios";
import { productType } from "@/types/types";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";

export default function search_result() {
  const [itemList, setItemList] = useState<productType[]>([]);
  const { query } = useRouter();
  // console.log(query.keyword);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/search/${query.keyword}`
      );
      setItemList(result.data.content);
    };
    getData();
  }, []);

  return (
    <>
      {/* 카테고리 & 필터링 */}
      <div id="store-head" className="search-result">
        <div className="first-section"></div>
        <StoreHeadCategory />
        <StoreHeadFilter data={store_subhead[0]} />
        <StoreHeadFilter data={store_subhead[1]} />

        {/* 선택한 필터 표시*/}
        <div className="header-sub" id="search-result-filter">
          <img src="/images/icons/reload.png" />

          <button>
            <p>1만원대</p>
            <img className="close-icon" src="/images/icons/close.png" />
          </button>
        </div>

        {/* 상품 */}
        <SelectOrder />
        <ProductContainerGrid itemList={itemList} />
      </div>
    </>
  );
}
