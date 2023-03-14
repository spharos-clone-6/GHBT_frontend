import React from "react";
import MainHeaderTop from "@/components/layouts/MainHeaderTop";
import MainHeaderBottom from "@/components/layouts/MainHeaderBottom";
import EventBanner from "@/components/widgets/EventBanner";
import ProductContainerRecommand from "@/components/layouts/ProductContainerRecommand";
import ProductContainerVertical from "@/components/layouts/ProductContainerVertical";

export default function index() {
  return (
    <div className="container">
      <EventBanner />
      <ProductContainerRecommand
        sectionId="recommand-md-1"
        headerName="Cherry Blossom 🌸"
      />

      <ProductContainerRecommand 
        sectionId="recommand-md-2"
        headerName="Cherry Blossom 💜"
      />
      <ProductContainerRecommand 
        sectionId="recommand-md-3"
        headerName="달콤한 스타벅스 케이크 🍰"
      />
      <ProductContainerVertical 
        sectionId="chunsik"
        headerName="바리스타 춘식 💛"
      />
    </div>
  );
}
