import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MainHeaderTop from "../../src/components/MainHeader/MainHeaderTop";
import SearchResultInfo from "../../src/components/SearchResult/SearchResultInfo";
import SubHeader from "../../src/components/SubHeader";

export default function search_result() {
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    setKeyword(decodeURI(window.location.search.split("=")[1]));
  }, []);

  if (!keyword) {
    return <></>;
  }

  return (
    <>
      <header>
        <MainHeaderTop />
        <SearchResultInfo keyword={keyword} />
      </header>
      <SubHeader location="search" />
      <div className="search-result">
        <div className="header-sub" id="search-result-category">
          <nav>
            <ul>
              <li className="active">
                <a href="">전체</a>
              </li>
              <li>
                <a href="">케이크</a>
              </li>
              <li>
                <a href="" className="hide">
                  텀블러/보온병
                </a>
              </li>
              <li>
                <a href="" className="hide">
                  머그/컵
                </a>
              </li>
              <li>
                <a href="" className="hide">
                  라이프스타일
                </a>
              </li>
              <li>
                <a href="" className="hide">
                  티/커피용품
                </a>
              </li>
              <li>
                <a href="" className="hide">
                  세트
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-sub" id="search-result-price">
          <nav>
            <p className="cat-title">가격</p>
            <ul>
              <li>
                <a href="">1만원미만</a>
              </li>
              <li>
                <a href="">1만원대</a>
              </li>
              <li>
                <a href="">2만원대</a>
              </li>
              <li>
                <a href="">3만원대</a>
              </li>
              <li>
                <a href="">4만원대</a>
              </li>
              <li>
                <a href="">5만원이상</a>
              </li>
            </ul>
          </nav>
        </div>
        <details id="search-result-season">
          <summary> 필터 더보기 </summary>
          <div className="header-sub">
            <nav>
              <p className="cat-title">시즌</p>
              <ul>
                <li>
                  <a href="">체리블라썸</a>
                </li>
                <li>
                  <a href="">발렌타인데이</a>
                </li>
                <li>
                  <a href="">New Year</a>
                </li>
                <li>
                  <a href="">데스크 컬렉션</a>
                </li>
                <li>
                  <a href="">Christmas</a>
                </li>
              </ul>
            </nav>
          </div>
        </details>
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
