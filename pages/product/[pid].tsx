/** @jsxImportSource @emotion/react */

import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import { cartOrder, deliveryPrice } from "@/components/recoil/cart";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import ProductLabel from "@/components/ui/ProductLabel";
import Detail from "@/components/widgets/Detail";
import InfoList from "@/components/widgets/InfoList";
import ProductDetailSubmit from "@/components/widgets/ProductDetailSubmit";
import { cartListType, productType } from "@/types/types";
import { css } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Image from "next/image";

export default function ProductDetail() {
  const dummy = {
    productId: 0,
    name: "테스트",
    price: 1000,
    description: "",
    thumbnailUrl: "",
    isBest: false,
    isNew: false,
  };

  const router = useRouter();
  const { query, isReady } = useRouter();
  const [product, setProduct] = useState<productType>(dummy);
  const [seasonProduct, setSeasonProduct] = useState<productType[]>([]);
  const [subProduct, setSubProduct] = useState<productType[]>([]);

  // 결제하기 페이지로 데이터 넘기기
  const [itemCount, setItemCount] = useState<number>(1);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [randomkey, setRandomKey] = useState<number>(Math.random());

  // 상세 데이터 설정
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
  }, [isReady, query]);

  // 구매하기 한번 눌렀을 때 구매하기, 선물하기, 아이템 수량 항목 나오게 핸들링
  const handleIsOpen = () => {
    console.log(isOpen);
    setRandomKey(Math.random());
    setIsOpen(!isOpen);
  };

  const sendData: cartListType = [
    {
      id: 0,
      quantity: itemCount,
      product: product,
      deleted: false,
      checked: false,
    },
  ];

  const setOrderList = useSetRecoilState(cartOrder);
  const setDelivery = useSetRecoilState(deliveryPrice);
  const router = useRouter();
  
  const onClickHandler = () => {
    setOrderList(sendData);
    setDelivery(itemCount * product.price > 30000 ? 0 : 3000);
    router.push("/payment");
  };

  // 카카오톡 공유 init
  useEffect(() => {
    if (!window.Kakao.isInitialized())
      window.Kakao.init("3516958a9b5f02f44ab75393b932aa86");
  }, []);

  // 공유하기 API 호출
  const shareKakao = () => {
    window.Kakao.Share.sendCustom({
      templateId: 91771,
      templateArgs: {
        TITLE: product.name,
        THU: `https://storage.googleapis.com/ghbt/product_thumbnail/${product?.thumbnailUrl}`,
        ID: query.pid,
      },
    });
  };

  return (
    <>
      <section id="product-top">
        <div className="product-img">
          {product?.thumbnailUrl && (
            <Image
              src={`https://storage.googleapis.com/ghbt/product_thumbnail/${product?.thumbnailUrl}`}
              alt={product.name}
              priority
              width={414}
              height={414}
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </div>
        <div className="product-info">
          <div className="product-name-container">
            <div className="product-name">
              <p>{product?.name}</p>
              <ProductLabel isBest={product?.isBest} isNew={product?.isNew} />
            </div>
            <div className="share-icon" onClick={shareKakao}>
              <Image
                src="/images/icons/share.png"
                alt="공유 버튼"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="description">{product?.description}</div>
          <div className="price">
            <Price price={product.price} />
          </div>
        </div>
      </section>
      <Detail />
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
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
        </div>
      </BottomFixedContainer>

      <BottomFixedContainer>
        <div css={buttonContainer} className={isOpen ? "" : "hide"}>
          <div css={iconStyle}>
            <Image
              src="/images/icons/shopping-cart.svg"
              width={20}
              height={20}
              alt="장바구니"
            />
          </div>
          <Button
            btnType="button"
            btnEvent={() => alert("선물하기")}
            type="white"
          >
            선물하기
          </Button>
          <Button btnType="button" btnEvent={onClickHandler}>
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
