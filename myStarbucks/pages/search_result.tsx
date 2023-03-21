import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StoreHeadCategory from "@/components/ui/StoreHeadCategory";
import StoreHeadFilter from "@/components/ui/StoreHeadFilter";
import { store_subhead } from "@/data/StaticData";
import SelectOrder from "@/components/ui/SelectOrder";
import axios from "axios";
import { productType } from "@/types/types";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";
import KeywordContainer from "@/components/widgets/KeywordContainer";

export default function search_result() {
  const [itemList, setItemList] = useState<productType[]>([]);
  const { query } = useRouter();
  // console.log(query.keyword);

  const [filterKeyword, setFilterKeyword] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/search/${query.keyword}`
      );
      setItemList(result.data.content);
    };
    getData();
  }, []);

  const handleReset = () => {
    setFilterKeyword([]);
  }

  return (
    <>
      {/* 카테고리 & 필터링 */}
      <div id="store-head" className="search-result">
        <div className="first-section"></div>
          <StoreHeadCategory />
          <StoreHeadFilter data={store_subhead[0]} setFilterKeyword={setFilterKeyword} filterKeyword={filterKeyword} />
          <StoreHeadFilter data={store_subhead[1]} setFilterKeyword={setFilterKeyword} filterKeyword={filterKeyword}/>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="/images/icons/reload.png" width={'5%'} height={'5%'} style={{padding: '5px', marginLeft: '15px'}} onClick={handleReset}/>
            <KeywordContainer filterKeyword={filterKeyword} setFilterKeyword={setFilterKeyword}/>
          </div>
        </div>

        {/* 상품 */}
        <SelectOrder />
        <ProductContainerGrid itemList={itemList} />
    </>
  );
}
