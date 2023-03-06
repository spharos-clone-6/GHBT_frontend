import React from 'react'

export default function best_tumbler() {
  return (
    <>
      <div className="container">
        <header>
          <div className="header-top">
            <div className="menu-icon">
              <img src="assets/images/icons/menu.svg" alt="" />
            </div>
            <h1>온라인 스토어</h1>
            <nav>
              <ul>
                <li>
                  <img src="assets/images/icons/search.svg" />
                </li>
                <li>
                  <img src="assets/images/icons/shopping-cart.svg" />
                </li>
                <li>
                  <img src="assets/images/icons/close.png" />
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-bottom">
            <nav>
              <ul>
                <li>
                  <a href="index.html">메인</a>
                </li>
                <li>
                  <a href="event.html">기획전</a>
                </li>
                <li className="active">
                  <a href="">베스트</a>
                </li>
                <li>
                  <a href="">마이페이지</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-sub">
            <nav>
              <ul>
                <li className="active">케이크</li>
                <li>텀블러/보온병</li>
                <li>머그/컵</li>
                <li>라이프스타일</li>
                <li>티/커피용품</li>
                <li>세트</li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="best-cake" className="first-section-sub-one">
          <div className="product-container">
            <div className="product-item">
              <img src="assets/images/best/cake/01.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
              <div className="rank-label">
                <p>1</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/best/cake/02.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
              <div className="rank-label">
                <p>2</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/best/cake/03.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
              <div className="rank-label">
                <p>3</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/best/cake/04.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best hide">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
              <div className="rank-label">
                <p>4</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/best/cake/05.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="item-best hide">Best</p>
                <p className="item-title">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
              <div className="rank-label">
                <p>5</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  )
}
