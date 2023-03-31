/** @jsxImportSource @emotion/react */

import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import { cartOrder, deliveryPrice } from "@/state/cart";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Detail from "@/components/widgets/Detail";
import InfoList from "@/components/widgets/InfoList";
import { cartListType, productType } from "@/types/types";
import { css } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import CloseIcon from "@/components/ui/CloseIcon";
import { AT } from "@/data/StaticData";
import Config from "@/configs/config.export";
import ProductHeader from "@/components/page/product/ProductHeader";
import ProductOrderSection from "@/components/page/product/ProductOrderSection";

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

      console.log(query.pid);
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
      console.log(result.data);
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

  const onClickHandler = () => {
    setOrderList(sendData);
    setDelivery(itemCount * product.price > 30000 ? 0 : 3000);
    router.push("/payment");
  };

  // 장바구니에 아이템 추가
  const [isCart, setIsCart] = useState(false);
  const addCartHandler = () => {
    axios.post(
      `${baseUrl}/api/cart`,
      {
        productId: query.pid,
        quantity: itemCount,
      },
      {
        headers: {
          Authorization: AT,
        },
      }
    );
    console.log("장바구니 담기 성공!");
    setIsCart(true);
  };

  return (
    <>
      <ProductHeader product={product} />
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
        <ProductOrderSection
          product={product}
          itemCount={itemCount}
          setItemCount={setItemCount}
          purchaseHandler={onClickHandler}
          addCartHandler={addCartHandler}
        />
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
      )}{" "}
      */
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
