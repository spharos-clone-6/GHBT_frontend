import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Config from "@/configs/config.export";

import axios from "axios";

import SelectOrder from "@/components/ui/SelectOrder";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";

import { productType } from "@/types/types";
import InfiniteScroll from "react-infinite-scroll-component";
import AllFilter from "@/components/layouts/AllFilter";
import Loading from "@/components/ui/Loading";
import ToTheTop from "@/components/ui/ToTheTop";

export default function StoreAll() {
  const { baseUrl } = Config();
  const { query, isReady } = useRouter();
  const [itemList, setItemList] = useState<productType[]>([]);
  const [allItem, setAllItem] = useState<productType[]>([]);
  const [isData, setIsData] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await axios.get(`${baseUrl}/api/product?page=0`);
  //     if (result.data !== "") {
  //       setAllItem([...result.data.content]);
  //       // setItemList([...result.data.content]);
  //     }
  //   };
  //   getData();
  // }, [baseUrl]);

  useEffect(() => {
    // console.log("itemList, 무한=", itemList);
    // console.log("all item=", allItem);
    // console.log("isData=", isData);
  }, [allItem]);

  const handleMoreData = () => {
    console.log("moreData");
    console.log("query.bigcategory", query.bigCategory);
    /** 전체 */
    if (query.bigCategory === "전체") {
      axios
        .get(`${baseUrl}/api/product?page=${page + 1}`)
        .then((res) => {
          res.data.content && setAllItem([...allItem, ...res.data.content]);
          setPage(page + 1);
          setIsData(!res.data.last);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      /** 나머지 카테고리 */
      axios
        .get(
          `${baseUrl}/api/product/search/c?filter=${query.bigCategory}&page=${
            page + 1
          }`
        )
        .then((res) => {
          res.data.content && setAllItem([...allItem, ...res.data.content]);
          setPage(page + 1);
          setIsData(!res.data.last);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // if (isData && itemList.length < 7) {
    //   handleMoreData();
    // }
  };

  const noItem = (): JSX.Element => {
    if (isData) {
      console.log("데이터는 더 있습니다!");
      handleMoreData();
    }
    return (
      <div style={{ textAlign: "center", marginTop: "30%" }}>
        <p>조회되는 상품이 없습니다.</p>
      </div>
    );
  };

  return (
    <>
      <ToTheTop />
      <AllFilter
        allItem={allItem}
        setAllItem={setAllItem}
        itemList={itemList}
        setItemList={setItemList}
        setPage={setPage}
        setIsData={setIsData}
      />
      {/* 정렬 기준 */}
      <SelectOrder itemList={itemList} setItemList={setItemList} />
      {itemList.length !== 0 || isData ? (
        <InfiniteScroll
          dataLength={itemList.length} // 반복 컴포넌트 개수
          next={handleMoreData} // 데이터 불러오는 함수
          hasMore={isData} // 추가 데이터 있는지?
          loader={isData && <Loading />}
        >
          {/* 상품 출력 */}
          <ProductContainerGrid itemList={itemList} />
        </InfiniteScroll>
      ) : (
        noItem()
      )}
      {itemList.length === 0 && isData ? handleMoreData() : ""}
      {/* {ready && handleMoreData()} */}
    </>
  );
}
