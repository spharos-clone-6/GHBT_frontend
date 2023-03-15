import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import ProductLabel from "@/components/ui/ProductLabel";
import SubmitButton from "@/components/ui/SubmitButton";
import InfoList from "@/components/widgets/InfoList";
import { productType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function productDetail() {
  const dummy = {
    id: 1,
    name: "23 SS 체리 밸류 로맨틱 텀블러 355ml",
    price: 32000,
    thumbnailUrl: "/images/products/01.png",
    isBest: false,
    isNew: true,
  }

  const { query } = useRouter();
  const [product, setProduct] = useState<productType>(dummy);

  useEffect(() => {
    const getData = async () => {
      if (query.pid === undefined) query.pid = "1"
      const result = await axios.get(`http://backend.grapefruit-honey-black-tea.shop/api/product/${query.pid}`)
      setProduct(result.data)
    };
    getData();
  }, [])

  const test = () => {
    alert("test");
  }

  return (
    <>
      <section id="product-top">
        <div className="product-img">
          <img
            src={`https://storage.googleapis.com/ghbt/thumbnail_image/${product?.thumbnailUrl}`}
            alt={product?.name}
          />
        </div>
        <div className="product-info">
          <div className="product-name-container">
            <div className="product-name">
              <p>{product?.name}</p>
              <ProductLabel
                isBest={true}
                isNew={true}
              />
            </div>
            <div className="share-icon">
              <img src="/images/icons/share.png" alt="" />
            </div>
          </div>

          <div className="description">
            {product?.description}
          </div>
          <div className="price">
            <span>{product?.price.toLocaleString('ko-KR')}</span>원
          </div>
        </div>
      </section>
      <section id="product-detail">
        <p>상품 정보</p>
        <img src="/images/products/product-detail.png" alt={product?.description} />
        {/*JS "상품정보 더보기" 버튼 추가 필요*/}
      </section>
      <ProductContainerRecommand
        headerName={"체리블라썸 상품"} itemList={[]}      
      />
      <ProductContainerRecommand
        headerName={"다른 고객이 함께 본 상품"} itemList={[]}      
      />
      <InfoList />
      <SubmitButton
        btnName="구매하기"
        btnEvent={test}
      />
    </>
  );
}