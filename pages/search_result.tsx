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
  const { query } = useRouter();
  // console.log(query.keyword);

  const [filterKeyword, setFilterKeyword] = useState<string[]>([]);
  const [volumeKeyword, setVolumeKeyword] = useState<string[]>([]);
  const [priceKeyword, setPriceKeyword] = useState<string[]>([]);
  const [categoryKeyword, setCategoryKeyword] = useState<string[]>([]);
  const [seasonKeyword, setSeasonKeyword] = useState<string[]>([]);

  const [categoryList, setCatogoryList] = useState<bigCategory[]>([]);

  const [itemList, setItemList] = useState<productType[]>([]);
  const [allItem, setAllItem] = useState<productType[]>([]);

  const [bItemList, setBItemList] = useState<productType[]>([]);
  const [vItemList, setVItemList] = useState<productType[]>([]);
  const [pItemList, setPItemList] = useState<productType[]>([]);
  const [cItemList, setCItemList] = useState<productType[]>([]);
  const [sItemList, setSItemList] = useState<productType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/n/search/${query.keyword}`
      );
      console.log(result.data === "");
      if (result.data !== "") {
        setItemList([...result.data]);
        setAllItem([...result.data]);
      }
    };
    getData();
  }, []);

  function categoryIdx(name: string | string[] | undefined): number {
    if (name === undefined) {
      return 6;
    }
    if (typeof name === "object") {
      name = name[0];
    }
    return middleCategory.findIndex((Object) => Object.bigType === name);
  }

  useEffect(() => {
    const getData = async () => {
      const categoryResult = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/n/search/type/${query.keyword}`
      );
      setCatogoryList([...categoryResult.data]);
    };
    getData();
  }, [query]);

  useEffect(() => {
    setFilterKeyword([
      ...volumeKeyword,
      ...priceKeyword,
      ...categoryKeyword,
      ...seasonKeyword,
    ]);
  }, [volumeKeyword, priceKeyword, categoryKeyword, seasonKeyword]);

  useEffect(() => {
    createUrl();
  }, [filterKeyword]);

  function isIn(itemList: productType[], x: number) {
    let itemIdList: number[] = [];
    itemList && itemList.map((item) => itemIdList.push(item.productId));
    return itemIdList.includes(x);
  }

  useEffect(() => {
    let items = [...allItem];
    if (bItemList) {
      items = items.filter((x) => isIn(bItemList, x.productId));
    }
    if (volumeKeyword.length !== 0) {
      items = items.filter((x) => isIn(vItemList, x.productId));
    }
    if (priceKeyword.length !== 0) {
      items = items.filter((x) => isIn(pItemList, x.productId));
    }
    if (categoryKeyword.length !== 0) {
      items = items.filter((x) => isIn(cItemList, x.productId));
    }
    if (seasonKeyword.length !== 0) {
      items = items.filter((x) => isIn(sItemList, x.productId));
    }
    setItemList([...items]);
  }, [
    vItemList,
    pItemList,
    cItemList,
    sItemList,
    bItemList,
    volumeKeyword,
    priceKeyword,
    categoryKeyword,
    seasonKeyword,
  ]);

  /** 대분류 필터링 --> 페이징 없는 버전으로 API 교체 필요 */
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/n/search/c?filter=${query.bigCategory}`
      );
      setBItemList(result.data);
    };
    getData();
    // setItemList([...itemList, ...vItemList]);
  }, [query.bigCategory]);

  /** 용량 필터링 */
  useEffect(() => {
    const url = requestUrl("v");
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/n/search/${url}`
      );
      setVItemList(result.data);
    };
    getData();
    // setItemList([...itemList, ...vItemList]);
  }, [volumeKeyword]);

  /** 가격 필터링 */
  useEffect(() => {
    let items: productType[] = [];
    priceKeyword &&
      priceKeyword.map((p) => {
        if (p === "1만원미만") {
          items = [...items, ...allItem.filter((x) => x.price < 10000)];
        } else if (p === "1만원대") {
          items = [
            ...items,
            ...allItem.filter((x) => x.price >= 10000 && x.price < 20000),
          ];
        } else if (p === "2만원대") {
          items = [
            ...items,
            ...allItem.filter((x) => x.price >= 20000 && x.price < 30000),
          ];
        } else if (p === "3만원대") {
          items = [
            ...items,
            ...allItem.filter((x) => x.price >= 30000 && x.price < 40000),
          ];
        } else if (p === "4만원대") {
          items = [
            ...items,
            ...allItem.filter((x) => x.price >= 40000 && x.price < 50000),
          ];
        } else if (p === "5만원이상") {
          items = [...items, ...allItem.filter((x) => x.price >= 50000)];
        }
      });
    setPItemList([...items]);
  }, [priceKeyword]);

  /** 카테고리(중) 필터링 */
  useEffect(() => {
    const url = requestUrl("c");
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/n/search/${url}`
      );
      console.log(result.data);
      setCItemList(result.data);
    };
    getData();
    // setItemList([...itemList, ...vItemList]);
  }, [categoryKeyword]);

  /** 시즌 필터링 */
  useEffect(() => {
    const url = requestUrl("s");
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/n/search/${url}`
      );
      setSItemList(result.data);
    };
    getData();
    // setItemList([...itemList, ...vItemList]);
  }, [seasonKeyword]);

  useEffect(() => {
    console.log("new item list=", itemList);
  }, [itemList]);

  const createUrl = () => {
    let url =
      router.pathname +
      "?keyword=" +
      router.query.keyword +
      "&bigCategory=" +
      router.query.bigCategory;
    filterKeyword.map((k) => (url = url + "&filter=" + k));
    router.push(url);
  };

  const handleReset = () => {
    setFilterKeyword([]);
  };

  function requestUrl(type: string): string {
    let url = query.keyword + "/" + type + "?";

    if (type === "v") {
      volumeKeyword.map((key) => (url = url + "filter=" + key + "&"));
    } else if (type === "c") {
      categoryKeyword.map((key) => (url = url + "filter=" + key + "&"));
    } else if (type === "s") {
      seasonKeyword.map((key) => (url = url + "filter=" + key + "&"));
    }
    return url;
  }

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
            setFilterKeyword={setVolumeKeyword}
            filterKeyword={volumeKeyword}
          />
        )}
        {/* 가격 */}
        <StoreHeadFilter
          data={store_subhead[0]}
          setFilterKeyword={setPriceKeyword}
          filterKeyword={priceKeyword}
        />
        {/* 중분류 카테고리 */}
        <StoreHeadFilter
          data={middleCategory[categoryIdx(query.bigCategory)]}
          setFilterKeyword={setCategoryKeyword}
          filterKeyword={categoryKeyword}
        />
        {/* 시즌 */}
        <StoreHeadFilter
          data={store_subhead[1]}
          setFilterKeyword={setSeasonKeyword}
          filterKeyword={seasonKeyword}
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
              volumeKeyword={volumeKeyword}
              setVolumeKeyword={setVolumeKeyword}
              priceKeyword={priceKeyword}
              setPriceKeyword={setPriceKeyword}
              categoryKeyword={categoryKeyword}
              setCategoryKeyword={setCategoryKeyword}
              seasonKeyword={seasonKeyword}
              setSeasonKeyword={setSeasonKeyword}
            />
          </div>
        )}
      </div>

      {/* 정렬 기준 */}
      <SelectOrder />

      {/* 상품 출력 */}
      {itemList.length !== 0 ? (
        <ProductContainerGrid itemList={itemList} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "30%" }}>
          <p>조회되는 상품이 없습니다.</p>
        </div>
      )}
    </>
  );
}
