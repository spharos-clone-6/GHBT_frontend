import React from "react";
import EventBanner from "@/components/widgets/EventBanner";
import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import ProductContainerVertical from "@/components/layouts/ProductContainerVertical";
import { productType } from "@/types/types";

export default function index() {
  const dummy: productType[] = [
    {
      id: 1,
      name: "23 SS 체리 밸류 로맨틱 텀블러 355ml",
      price: 32000,
      thumbnailUrl: "/images/products/01.png",
      isBest: false,
      isNew: true,
    },
    {
      id: 2,
      name: "테스트2",
      price: 17000,
      thumbnailUrl: "/images/products/01.png",
      isBest: true,
      isNew: true,
    },
    {
      id: 3,
      name: "테스트2",
      price: 17000,
      thumbnailUrl: "/images/products/01.png",
      isBest: true,
      isNew: true,
    },
    {
      id: 4,
      name: "테스트2",
      price: 17000,
      thumbnailUrl: "/images/products/01.png",
      isBest: true,
      isNew: true,
    },
    {
      id: 5,
      name: "테스트2",
      price: 17000,
      thumbnailUrl: "/images/products/01.png",
      isBest: true,
      isNew: true,
    }
  ];
  return (
    <div className="container">
      <EventBanner />
      <ProductContainerRecommand
        sectionId="recommand-md-1"
        headerName="Cherry Blossom 🌸"
        itemList={dummy}
      />
      <ProductContainerRecommand 
        sectionId="recommand-md-2"
        headerName="Cherry Blossom 💜"
        itemList={dummy}
      />
      <ProductContainerRecommand 
        sectionId="recommand-md-3"
        headerName="달콤한 스타벅스 케이크 🍰"
        itemList={dummy}
      />
      <ProductContainerVertical 
        sectionId="chunsik"
        headerName="바리스타 춘식 💛"
        itemList={dummy}
      />
    </div>
  );
}
