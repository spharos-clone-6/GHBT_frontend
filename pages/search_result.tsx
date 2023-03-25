/** @jsxImportSource @emotion/react */

import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StoreHeadFilter from "@/components/widgets/StoreHeadFilter";
import { middleCategory, store_subhead } from "@/data/StaticData";
import SelectOrder from "@/components/ui/SelectOrder";
import axios from "axios";
import { bigCategory, productType } from "@/types/types";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";
import SearchHeader from "@/components/widgets/SearchHeader";
import useFilter from "./hooks/useFilter";
import { css } from "@emotion/react";
import Config from "@/configs/config.export";

export default function search_result() {
  const router = useRouter();
  const { query } = useRouter();
  const { baseUrl } = Config();

  const [categoryList, setCatogoryList] = useState<bigCategory[]>([]);

  const [volumeKeyword, setVolumeKeyword] = useState<string[]>([]);
  const [priceKeyword, setPriceKeyword] = useState<string[]>([]);
  const [categoryKeyword, setCategoryKeyword] = useState<string[]>([]);
  const [seasonKeyword, setSeasonKeyword] = useState<string[]>([]);
  const [isNullKeyword, setIsNullKeyword] = useState<boolean>(true);

  const [allItem, setAllItem] = useState<productType[]>([]); // 키워드 검색결과 전체
  const [itemList, setItemList] = useState<productType[]>([]); // 현재 조건에 맞는 아이템

  const [bItemList, setBItemList] = useState<productType[]>([]);
  const vItemList = useFilter(requestUrl("v"), volumeKeyword);
  const cItemList = useFilter(requestUrl("c"), categoryKeyword);
  const sItemList = useFilter(requestUrl("s"), seasonKeyword);
  const [pItemList, setPItemList] = useState<productType[]>([]);

  /** 초기 데이터 세팅 */
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const getData = async () => {
      const result = await axios.get(
        `${baseUrl}/api/product/n/search/${query.keyword}`
      );
      if (result.data !== "") {
        setItemList([...result.data]);
        setAllItem([...result.data]);
      }
    };
    getData();
    console.log("초기 데이터 세팅");
  }, [router.isReady]);

  /** 대분류 필터링 */
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/product/n/search/type/${query.keyword}`)
      .then((res) => {
        setCatogoryList([...res.data]);
      });

    axios
      .get(`${baseUrl}/api/product/n/search/c?filter=${query.bigCategory}`)
      .then((res) => {
        setBItemList(res.data);
      });
  }, [query.bigCategory]);

  /** 키워드 변경 */
  useEffect(() => {
    console.log("키워드를 다시 세팅할게요");
    createUrl();
    if (
      volumeKeyword.length === 0 &&
      priceKeyword.length === 0 &&
      categoryKeyword.length === 0 &&
      seasonKeyword.length === 0
    ) {
      setIsNullKeyword(true);
    } else {
      setIsNullKeyword(false);
    }
  }, [volumeKeyword, priceKeyword, categoryKeyword, seasonKeyword]);

  /** 보여줄 아이템 리스트 변경 */
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
    console.log("쿼리 변경! 전체 아이템 수정!");
    setItemList([...items]);
  }, [bItemList, vItemList, pItemList, cItemList, sItemList]);

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

  /** 결과 확인용 */
  useEffect(() => {
    console.log("new item list=", itemList);
  }, [itemList]);

  const createUrl = () => {
    let url =
      router.pathname +
      "?keyword=" +
      getQuery(router.query.keyword, "텀블러") +
      "&bigCategory=" +
      getQuery(router.query.bigCategory, "전체");
    volumeKeyword.map((k) => (url = url + "&volume=" + k));
    priceKeyword.map((k) => (url = url + "&price=" + k));
    categoryKeyword.map((k) => (url = url + "&category=" + k));
    seasonKeyword.map((k) => (url = url + "&season=" + k));

    console.log("url 새로 생성함...");
    router.push(url);
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

  const handleDelete = (key: string) => {
    volumeKeyword.includes(key) &&
      setVolumeKeyword([...volumeKeyword.filter((el) => el !== key)]);
    priceKeyword.includes(key) &&
      setPriceKeyword([...priceKeyword.filter((el) => el !== key)]);
    categoryKeyword.includes(key) &&
      setCategoryKeyword([...categoryKeyword.filter((el) => el !== key)]);
    seasonKeyword.includes(key) &&
      setSeasonKeyword([...seasonKeyword.filter((el) => el !== key)]);
  };

  const handleReset = () => {
    setVolumeKeyword([]);
    setPriceKeyword([]);
    setCategoryKeyword([]);
    setSeasonKeyword([]);
  };

  const renderKeyword = (keywordList: string[]): JSX.Element[] => {
    const keywords =
      keywordList &&
      keywordList.map((keyword, idx) => (
        <button
          key={idx}
          css={buttonStyle}
          onClick={() => handleDelete(keyword)}
        >
          <p>{keyword}</p>
          <p style={{ marginLeft: "8px" }}>X</p>
        </button>
      ));
    return keywords;
  };

  return (
    <>
      {/* 카테고리 & 필터링 */}
      <div id="store-head" className="search-result">
        <div className="first-section"></div>
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
        {!isNullKeyword && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/images/icons/reload.png"
              width={"5%"}
              height={"5%"}
              style={{ padding: "5px", marginLeft: "15px" }}
              onClick={handleReset}
            />

            <div id="search-result-filter" style={{ height: "32px" }}>
              {renderKeyword(volumeKeyword)}
              {renderKeyword(priceKeyword)}
              {renderKeyword(categoryKeyword)}
              {renderKeyword(seasonKeyword)}
            </div>
          </div>
        )}
      </div>

      {/* 정렬 기준 */}
      <SelectOrder itemList={itemList} setItemList={setItemList} />

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

const buttonStyle = css`
  vertical-align: baseline;
  background-color: var(--color-light-green);
  color: var(--color-white);
  border: none;
  border-radius: 3px;
  padding: 7px 15px;
  white-space: nowrap;
`;

function getQuery(
  name: string | string[] | undefined,
  replaceValue: string
): string | string[] {
  if (typeof name === "undefined") {
    return replaceValue;
  } else {
    return name;
  }
}

function categoryIdx(name: string | string[] | undefined): number {
  if (name === undefined) {
    return 6;
  }
  if (typeof name === "object") {
    name = name[0];
  }
  return middleCategory.findIndex((Object) => Object.bigType === name);
}

function isIn(itemList: productType[], x: number) {
  let itemIdList: number[] = [];
  itemList && itemList.map((item) => itemIdList.push(item.productId));
  return itemIdList.includes(x);
}
