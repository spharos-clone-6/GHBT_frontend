import React, { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Config from '@/configs/config.export';

import axios from "axios";
import useInfiniteScroll from 'react-infinite-scroll-hook';

import SelectOrder from "@/components/ui/SelectOrder";
import ProductContainerGrid from "@/components/layouts/ProductContainerGrid";

import { bigCategory, productType } from "@/types/types";
import InfiniteScroll from "react-infinite-scroll-component";


export default function store_all() {

  const { query } = useRouter();
  const { baseUrl } = Config();
  // console.log(query.keyword);
  console.log(query.page);
  const [itemList, setItemList] = useState<productType[]>([]);
  const [isData, setIsData] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `${baseUrl}/api/product?page=${page}`
      );
      console.log(result.data === "");
      if (result.data !== "") {
        setItemList([...result.data.content]);
      }
    };
    getData();
  }, []);

  useEffect(()=>{
    console.log(itemList)
    console.log(isData)
  },[itemList])

  const handleMoreData = () => {

    axios.get(`${baseUrl}/api/product?page=${page + 1}`)
    .then((res) => {
      console.log(res.data)
      setItemList([...itemList, ...res.data.content]);
      setPage(page + 1)
      setIsData(!res.data.last)
    })
    .catch((err) => {
      console.log(err);
    })

  }
 
  


  return (
    <>
      
      {/* 정렬 기준 */}
      <SelectOrder />
      <InfiniteScroll
        dataLength={itemList.length}
        next={handleMoreData}
        hasMore={isData}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>NoData</h4>}
      >
      {/* 상품 출력 */}
      {itemList.length !== 0 ? (
        <ProductContainerGrid itemList={itemList} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "30%" }}>
          <p>조회되는 상품이 없습니다.</p>
        </div>
      )}
      </InfiniteScroll>
    </>
  );
}
