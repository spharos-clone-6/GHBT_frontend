/** @jsxImportSource @emotion/react */

import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import ProductLabel from "@/components/ui/ProductLabel";
import Detail from "@/components/widgets/Detail";
import InfoList from "@/components/widgets/InfoList";
import ProductDetailSubmit from "@/components/widgets/ProductDetailSubmit";
import { detailProductType, productType } from "@/types/types";
import { css } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

export default function productDetail() {
  const dummy = {
    name: "테스트 데이터",
    productId: 1,
    description: "더미",
    price: 10000,
    subType: "홀케이크",
    bigType: "케이크",
    season: "",
    volume: "",
  };

  const { query } = useRouter();
  const [product, setProduct] = useState<detailProductType>(dummy);
  const [seasonProduct, setSeasonProduct] = useState<productType[]>([]);
  const [subProduct, setSubProduct] = useState<productType[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [randomkey, setRandomKey] = useState<number>(Math.random());

  useEffect(() => {
    const getData = async () => {
      if (query.pid === undefined) query.pid = "1";

      console.log(query.pid);
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/product/${query.pid}`
      );

      if (result.data.season !== "") {
        const seasonResult = await axios.get(
          `http://backend.grapefruit-honey-black-tea.shop/api/product/search/c?filter=${result.data.season}`
        );
        let filtered = seasonResult.data.content.filter(
          (p: productType) => p.name !== result.data.name
        );
        setSeasonProduct(filtered);
      }

      if (result.data.subType !== "") {
        const subResult = await axios.get(
          `http://backend.grapefruit-honey-black-tea.shop/api/product/search/c?filter=${result.data.subType}`
        );
        let filtered = subResult.data.content.filter(
          (p: productType) => p.name !== result.data.name
        );
        setSubProduct(filtered);
      }
      setProduct(result.data);
    };
    getData();
  }, []);

  const handleIsOpen = () => {
    console.log(isOpen);
    setRandomKey(Math.random());
    setIsOpen(!isOpen);
  };

  const buttonContainer = css`
    display: flex;
    gap: 15px;
    padding: 0 30px;
    align-items: center;
  `;

  const iconStyle = css`
    padding: 0;
    margin: 0;
    width: 30%;
  `;

  return (
    <>
      <section id="product-top">
        <div className="product-img">
          <img
            src={`https://storage.googleapis.com/ghbt/product_thumbnail/${product?.thumbnailUrl}`}
            alt={product?.name}
          />
        </div>
        <div className="product-info">
          <div className="product-name-container">
            <div className="product-name">
              <p>{product?.name}</p>
              <ProductLabel isBest={product?.isBest} isNew={product?.isNew} />
            </div>
            <div className="share-icon">
              <img src="/images/icons/share.png" alt="" />
            </div>
          </div>

          <div className="description">{product?.description}</div>
          <div className="price">
            <Price price={product.price} />
          </div>
        </div>
      </section>
      <Detail pid={query.pid} />
      {seasonProduct.length !== 0 && (
        <ProductContainerRecommand
          headerName={`${product.season} 상품`}
          itemList={seasonProduct}
        />
      )}

      {subProduct.length !== 0 && (
        <ProductContainerRecommand
          headerName={"비슷한 상품을 확인해보세요"}
          itemList={subProduct}
        />
      )}

      <InfoList />
      <BottomFixedContainer animation={true} key={randomkey}>
        <div className="toggle-icon" onClick={handleIsOpen}></div>
        <div className={isOpen ? "" : "hide"}>
          <ProductDetailSubmit
            price={product.price}
            productName={product.name}
            handleIsOpen={handleIsOpen}
          />
        </div>
      </BottomFixedContainer>

      <BottomFixedContainer>
        <div css={buttonContainer} className={isOpen ? "" : "hide"}>
          <div css={iconStyle}>
            <img src="/images/icons/shopping-cart.svg" width={"60%"} />
          </div>
          <Button
            btnType="button"
            btnEvent={() => alert("선물하기")}
            type="white"
          >
            선물하기
          </Button>
          <Button btnType="button" btnEvent={() => alert("구매하기")}>
            구매하기
          </Button>
        </div>
        <div
          className={isOpen ? "hide" : "toggle-icon"}
          onClick={handleIsOpen}
        ></div>
        <div className={isOpen ? "hide" : ""}>
          <Button btnType="button" btnEvent={handleIsOpen}>
            구매하기
          </Button>
        </div>
      </BottomFixedContainer>
    </>
  );
}
