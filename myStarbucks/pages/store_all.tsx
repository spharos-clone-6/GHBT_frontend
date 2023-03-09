import React from "react";

export default function store_all() {
  return (
    <>
      <div className="container">
        <div>
          <header id="store-head">
            <div className="store-header-top header-top">
              <div className="menu-icon">
                <img src="/assets/images/icons/menu.svg" alt="" />
              </div>
              <h1>
                <a href="">온라인 스토어</a>
              </h1>
              <nav>
                <ul>
                  <li>
                    <img src="/assets/images/icons/search.svg" />
                  </li>
                  <li>
                    <img src="/assets/images/icons/shopping-cart.svg" />
                  </li>
                  <li>
                    <img src="/assets/images/icons/close.png" />
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-sub">
              <nav>
                <ul>
                  <li className="active">
                    <a href="">전체</a>
                  </li>
                  <li>
                    <a href="store-cake.html">케이크</a>
                  </li>
                  <li>
                    <a href="store-tumbler.html">텀블러/보온병</a>
                  </li>
                  <li>
                    <a href="store-mug.html">머그/컵</a>
                  </li>
                  <li>
                    <a href="store-lifestyle.html">라이프스타일</a>
                  </li>
                  <li>
                    <a href="store-tea.html">티/커피용품</a>
                  </li>
                  <li>
                    <a href="store-set.html">세트</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-sub">
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
            <details>
              <summary> 접기 </summary>
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
            <div className="products-order">
              <p>신상품순</p>
              <img src="/assets/images/icons/arrow-down-sign-to-navigate.png" />
            </div>
          </header>
        </div>
        <section id="products">
          <div></div>
        </section>
      </div>
    </>
  );
}
