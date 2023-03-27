import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import DetailImage from "../ui/DetailImage";

interface imgData {
  id: number;
  productId: number;
  url: string;
}

export default function Detail(props: { pid: string | string[] | undefined }) {
  const [imgList, setImgList] = useState<imgData[]>([]);
  const [showImgList, setShowImgList] = useState<imgData[]>([]);
  const [isMore, setIsMore] = useState<boolean>(false);

  const router = useRouter();

  const renderImgs = (): JSX.Element[] => {
    const imgs =
      showImgList &&
      showImgList.map((image, idx) => {
        if (image === undefined) {
          return (
            <p key={idx} style={{ fontSize: "0.8rem", color: "gray" }}>
              상세이미지 없음
            </p>
          );
        }
        return <DetailImage key={image.id} url={image.url} />;
      });
    return imgs;
  };

  const handleMore = () => {
    setShowImgList([...imgList]);
    setIsMore(true);
  };

  const handleMoreClose = () => {
    setShowImgList([imgList[0]]);
    setIsMore(false);
  };

  useEffect(() => {
    if (router.query.pid === undefined) router.query.pid = "1";
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/image/${router.query.pid}`
      );
      console.log(result.data.images);
      setImgList([...result.data.images]);
      setShowImgList([result.data.images[0]]);
    };
    getData();
  }, [router.isReady, router.query]);

  return (
    <>
      <section id="product-detail">
        <p>상품 정보</p>
        {renderImgs()}
        <div
          style={{ textAlign: "center", position: "relative", top: "-40px" }}
        >
          {imgList.length > 1 && !isMore && (
            <Button type="more" btnType={"button"} btnEvent={handleMore}>
              상품 정보 더보기
              <img
                src="/images/icons/upload.png"
                width={"3%"}
                style={{
                  paddingRight: "5px",
                  transform: "rotate(180deg)",
                  opacity: "0.5",
                }}
              />
            </Button>
          )}
          {imgList.length > 1 && isMore && (
            <Button type="more" btnType={"button"} btnEvent={handleMoreClose}>
              상품 정보 접기
              <img
                src="/images/icons/upload.png"
                width={"3%"}
                style={{ paddingLeft: "5px", opacity: "0.5" }}
              />
            </Button>
          )}
        </div>
      </section>
    </>
  );
}
