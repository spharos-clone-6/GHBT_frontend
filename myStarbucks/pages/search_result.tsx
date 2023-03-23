import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StoreHeadFilter from "@/components/widgets/StoreHeadFilter";
import { middleCategory, store_subhead } from "@/data/StaticData";
import SelectOrder from "@/components/ui/SelectOrder";
import axios from "axios";
import { bigCategory, productType } from "@/types/types";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";
import KeywordContainer from "@/components/widgets/KeywordContainer";
import SearchHeader from "@/components/widgets/SearchHeader";

export default function search_result() {
  const [itemList, setItemList] = useState<productType[]>([]);
  const { query } = useRouter();
  // console.log(query.keyword);

  const [filterKeyword, setFilterKeyword] = useState<string[]>([]);
  const [categoryList, setCatogoryList] = useState<bigCategory[]>([]);

  function categoryIdx(name: string | string[] | undefined): number {
    if (name === undefined) {
      return 6;
    }
    if (typeof name === "object") {
      name = name[0];
    }
    console.log();
    return middleCategory.findIndex((Object) => Object.bigType === name);
  }

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/search/${query.keyword}`
      );
      setItemList([...result.data.content]);

      const categoryResult = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/search/type/${query.keyword}`
      );
      setCatogoryList([...categoryResult.data.content]);
      console.log("big=", query.bigCategory);
    };
    getData();
  }, [query]);

  useEffect(() => {
    createUrl();
  }, [filterKeyword]);

  const createUrl = () => {
    let url =
      router.pathname +
      "?keyword=" +
      router.query.keyword +
      "&bigCategory=" +
      router.query.bigCategory;
    filterKeyword.map((k) => (url = url + "&filter=" + k));
    console.log(url);
    router.push(url);
  };
  const handleReset = () => {
    setFilterKeyword([]);
  };

  return (
    <>
      {/* 카테고리 & 필터링 */}
      <div id="store-head" className="search-result">
        <div className="first-section"></div>
        {/* <StoreHeadCategory /> */}
        {categoryList.length !== 0 && <SearchHeader itemList={categoryList} />}
        {/* 용량 */}
        {(query.bigCategory?.includes("텀블러/보온병") ||
          query.bigCategory?.includes("머그/컵")) && (
          <StoreHeadFilter
            data={store_subhead[2]}
            setFilterKeyword={setFilterKeyword}
            filterKeyword={filterKeyword}
          />
        )}

        {/* 가격 */}
        <StoreHeadFilter
          data={store_subhead[0]}
          setFilterKeyword={setFilterKeyword}
          filterKeyword={filterKeyword}
        />
        {/* 중분류 카테고리 */}
        <StoreHeadFilter
          data={middleCategory[categoryIdx(query.bigCategory)]}
          setFilterKeyword={setFilterKeyword}
          filterKeyword={filterKeyword}
        />
        {/* 시즌 */}
        <StoreHeadFilter
          data={store_subhead[1]}
          setFilterKeyword={setFilterKeyword}
          filterKeyword={filterKeyword}
        />
        {filterKeyword.length !== 0 && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/icons/reload.png"
              width={"5%"}
              height={"5%"}
              style={{ padding: "5px", marginLeft: "15px" }}
              onClick={handleReset}
            />
            <KeywordContainer
              filterKeyword={filterKeyword}
              setFilterKeyword={setFilterKeyword}
            />
          </div>
        )}
      </div>

      {/* 상품 */}
      <SelectOrder />
      <ProductContainerGrid itemList={itemList} />
    </>
  );
}
