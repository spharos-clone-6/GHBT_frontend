/** @jsxImportSource @emotion/react */

import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import { cartOrder, deliveryPrice } from "@/state/cart";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import ProductLabel from "@/components/ui/ProductLabel";
import Detail from "@/components/widgets/Detail";
import InfoList from "@/components/widgets/InfoList";
import ProductDetailSubmit from "@/components/widgets/ProductDetailSubmit";
import { cartListType, productType } from "@/types/types";
import { css, keyframes } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Image from "next/image";
import CloseIcon from "@/components/ui/CloseIcon";
import Config from "@/configs/config.export";
import { accessTokenState } from "@/state/accessTokenState";
import Swal from "sweetalert2";
import axiosApiInstance from "@/utils/axiosInstance";

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

  const { baseUrl } = Config();
  // 상세 데이터 설정
  useEffect(() => {
    const getData = async () => {
      if (query.pid === undefined) query.pid = "1";

      const result = await axios.get(`${baseUrl}/api/product/${query.pid}`);

      if (result.data.season !== "") {
        const seasonResult = await axios.get(
          `${baseUrl}/api/product/search/c?filter=${result.data.season}`
        );
        let filtered = seasonResult.data.content.filter(
          (p: productType) => p.name !== result.data.name
        );
        setSeasonProduct(filtered);
      }

      if (result.data.subType !== "") {
        const subResult = await axios.get(
          `${baseUrl}/api/product/search/c?filter=${result.data.subType}`
        );
        let filtered = subResult.data.content.filter(
          (p: productType) => p.name !== result.data.name
        );
        setSubProduct(filtered);
      }
      setProduct(result.data);
    };
    getData();
  }, [isReady, query, baseUrl]);

  // 구매하기 한번 눌렀을 때 구매하기, 선물하기, 아이템 수량 항목 나오게 핸들링
  const handleIsOpen = () => {
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

  // 장바구니에 아이템 추가
  const AT = useRecoilValue(accessTokenState);
  const [isCart, setIsCart] = useState(false);
  const addCartHandler = () => {
    axiosApiInstance.post(`/cart`, {
      productId: query.pid,
      quantity: itemCount,
    });
    setIsCart(true);
  };

  const alertMessage = () => {
    Swal.fire({
      icon: "warning",
      text: "장바구니 이용을 위해서는 로그인이 필요합니다.",
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
      {!isCart && (
        <div>
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
                {AT ? (
                  <Image
                    src="/images/icons/shopping-cart.svg"
                    width={20}
                    height={20}
                    alt="장바구니"
                    onClick={addCartHandler}
                  />
                ) : (
                  <Image
                    src="/images/icons/shopping-cart.svg"
                    width={20}
                    height={20}
                    alt="장바구니"
                    onClick={alertMessage}
                  />
                )}
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
        </div>
      )}

      {isCart && (
        <BottomFixedContainer animation={true}>
          <div css={CartContainer}>
            장바구니에 추가되었습니다.
            <CloseIcon
              width={15}
              height={15}
              onClickHandler={() => {
                setIsCart(false);
                setIsOpen(false);
              }}
            />
          </div>
          <div css={buttonContainer}>
            <Button
              btnType="button"
              btnEvent={() => router.push("/cart")}
              type="white"
            >
              장바구니 가기
            </Button>
            <Button
              btnType="button"
              btnEvent={() => {
                router.push("/store");
              }}
            >
              상품 더보기
            </Button>
          </div>
        </BottomFixedContainer>
      )}
    </>
  );
}

const buttonContainer = css`
  display: flex;
  gap: 15px;
  padding: 0 30px;
  align-items: center;
`;

const CartContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 30px 0px 30px;
`;

const animate = keyframes`

20% {
  transform: rotate(-30deg);
}

60% {
  transform: rotate(30deg);
}

100% {
  transform: rotate(0);
}
`;

const iconStyle = css`
  padding: 0;
  margin: 0;
  width: 30%;
  animation: ${animate} 0.5s ease-out;
`;
