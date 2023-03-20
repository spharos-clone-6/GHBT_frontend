import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import ProductLabel from "@/components/ui/ProductLabel";
import Detail from "@/components/widgets/Detail";
import InfoList from "@/components/widgets/InfoList";
import ProductDetailSubmit from "@/components/widgets/ProductDetailSubmit";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const handleIsOpen = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
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
                isBest={product?.isBest}
                isNew={product?.isNew}
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
            <Price price={product.price} />
          </div>
        </div>
      </section>
      <Detail
        pid={query.pid}
      />
      <ProductContainerRecommand
        headerName={"체리블라썸 상품"} itemList={[]}
      />
      <ProductContainerRecommand
        headerName={"다른 고객이 함께 본 상품"} itemList={[]}
      />
      <InfoList />
      <BottomFixedContainer>
        <div className="toggle-icon" onClick={handleIsOpen}></div>
        <div className={isOpen? "": "hide"}><ProductDetailSubmit price={product.price} productName={product.name} handleIsOpen={handleIsOpen}/></div>
        <div className={isOpen? "hide" : ""}><Button btnType="button" btnEvent={handleIsOpen}>구매하기</Button></div>
      </BottomFixedContainer>
    </>
  );
}