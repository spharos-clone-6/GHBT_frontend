import ProductLabel from "@/components/ui/ProductLabel";
import InfoList from "@/components/widgets/InfoList";
import { productType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function productDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState<productType>();

  useEffect(() => {
    const getData = async () => {
      if (query.pid === undefined) query.pid = "1"
      const result = await axios.get(`http://backend.grapefruit-honey-black-tea.shop/api/product/${query.pid}`)
      setProduct(result.data)
    };
    getData();
  }, [])

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
          <div className="price">{product?.price}</div>
        </div>
      </section>
      <section id="product-detail">
        <p>상품 정보</p>
        <img src="/images/products/product-detail.png" alt={product?.description} />
        {/*JS "상품정보 더보기" 버튼 추가 필요*/}
      </section>
      <section className="product-recommand">
        <p>체리블라썸 상품</p>
      </section>
      <section className="product-recommand">
        <p>다른 고객이 함께 본 상품</p>
      </section>

      <InfoList />

      <section className="submit-container">
        <div className="submit-detail" >
          ---
          <div>
            <p>제목어쩌고</p>
            <p>+ 0 - ---------------- 가격</p>
          </div>
          <div>
            합계
          </div>
        </div>

        <a href="">
          <button type="submit">구매하기</button>
        </a>
      </section>

    </>
  );
}