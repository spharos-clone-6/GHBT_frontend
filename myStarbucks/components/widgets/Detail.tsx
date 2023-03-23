import axios from "axios";
import React, { useEffect, useState } from "react";

interface imgData {
  id: number;
  productId: number;
  url: string;
}

export default function Detail(props: { pid: string | string[] | undefined }) {
  const [imgList, setImgList] = useState<imgData[]>([]);
  const renderImgs = (): JSX.Element[] => {
    const imgs = imgList.map((image) => {
      return (
        <img
          key={image.id}
          src={`https://storage.googleapis.com/ghbt/product_image/${image.url}`}
          alt=""
        />
      );
    });
    return imgs;
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://backend.grapefruit-honey-black-tea.shop/api/image/${props.pid}`
      );
      console.log(result.data.images);
      setImgList([...result.data.images]);
      console.log(imgList);
    };
    getData();
  }, []);

  return (
    <>
      <section id="product-detail">
        <p>상품 정보</p>
        {renderImgs()}
      </section>
    </>
  );
}
