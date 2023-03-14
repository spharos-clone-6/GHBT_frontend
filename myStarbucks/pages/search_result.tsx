import { useRouter } from "next/router";
import { useState } from "react";
import SearchCategoryHeader from "@/components/widgets/SearchCategoryHeader";
import StoreHeadCategory from "@/components/ui/StoreHeadCategory";
import StoreHeadFilter from "@/components/ui/StoreHeadFilter";
import { store_subhead } from "@/data/StaticData";

export default function search_result() {
  const { query } = useRouter();
  const keyword = query.keyword;
  // const [keyword, setKeyword] = useState(query.keyword);
  console.log(keyword);
  return (
    <>
      {/* 카테고리 & 필터링 */}
      <div id="store-head" className="search-result">
        <SearchCategoryHeader />
        <StoreHeadCategory />
        <StoreHeadFilter data={store_subhead[0]} />
        <StoreHeadFilter data={store_subhead[1]} />

        {/* 선택한 필터 표시*/}
        <div className="header-sub" id="search-result-filter">
          <img src="/images/icons/reload.png" />
          <button>
            <p>체리블라썸</p>
            <img className="close-icon" src="/images/icons/close.png" />
          </button>
          <button>
            <p>1만원대</p>
            <img className="close-icon" src="/images/icons/close.png" />
          </button>
        </div>

        {/* 상품 */}
        <div className="products-order">
          <p>신상품순</p>
          <img src="/images/icons/arrow-down-sign-to-navigate.png" />
        </div>
        <section id="search-result-product">
          <div className="product-container margin-top-zero padding-top-zero">
            <div className="product-item">
              <img src="/images/best/cake/01.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best hide">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
            </div>
            <div className="product-item">
              <img src="/images/best/cake/02.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best hide">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
            </div>
            <div className="product-item">
              <img src="/images/best/cake/02.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best hide">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
