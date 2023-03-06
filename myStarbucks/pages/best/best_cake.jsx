import React from 'react'

export default function best_cake() {
  return (
    <div class="container">
      <header>
        <div class="header-top">
          <div class="menu-icon">
            <img src="assets/images/icons/menu.svg" alt="">
          </div>
          <h1>온라인 스토어</h1>
          <nav>
            <ul>
              <li><img src="assets/images/icons/search.svg"></li>
              <li><img src="assets/images/icons/shopping-cart.svg"></li>
              <li><img src="assets/images/icons/close.png"></li>
            </ul>
          </nav>
        </div>
        <div class="header-bottom">
          <nav>
            <ul>
              <li><a href="index.html">메인</a></li>
              <li><a href="event.html">기획전</a></li>
              <li class="active"><a href="">베스트</a></li>
              <li><a href="">마이페이지</a></li>
            </ul>
          </nav>
        </div>
        <div class="header-sub">
          <nav>
            <ul>
              <li class="active">케이크</li>
              <li>텀블러/보온병</li>
              <li>머그/컵</li>
              <li>라이프스타일</li>
              <li>티/커피용품</li>
              <li>세트</li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="best-cake" class="first-section-sub-one">
        <div class="product-container">
          <div class="product-item">
            <img src="assets/images/best/cake/01.jpg" class="thumbnail" />
            <div class="product-item-info">
              <p class="item-best">Best</p>
              <p class="item-title">부드러운 티라미수 롤케이크</p>
              <p class="product-item-price">19,900원</p>
            </div>
            <div class="rank-label">
              <p>1</p>
            </div>
          </div>
          <div class="product-item">
            <img src="assets/images/best/cake/02.jpg" class="thumbnail" />
            <div class="product-item-info">
              <p class="item-best">Best</p>
              <p class="item-title">부드러운 티라미수 롤케이크</p>
              <p class="product-item-price">19,900원</p>
            </div>
            <div class="rank-label">
              <p>2</p>
            </div>
          </div>
          <div class="product-item">
            <img src="assets/images/best/cake/03.jpg" class="thumbnail" />
            <div class="product-item-info">
              <p class="item-best">Best</p>
              <p class="item-title">부드러운 티라미수 롤케이크</p>
              <p class="product-item-price">19,900원</p>
            </div>
            <div class="rank-label">
              <p>3</p>
            </div>
          </div>
          <div class="product-item">
            <img src="assets/images/best/cake/04.jpg" class="thumbnail" />
            <div class="product-item-info">
              <p class="item-best hide">Best</p>
              <p class="item-title">부드러운 티라미수 롤케이크</p>
              <p class="product-item-price">19,900원</p>
            </div>
            <div class="rank-label">
              <p>4</p>
            </div>
          </div>
          <div class="product-item">
            <img src="assets/images/best/cake/05.jpg" class="thumbnail" />
            <div class="product-item-info">
              <p class="item-best hide">Best</p>
              <p class="item-title">부드러운 티라미수 롤케이크</p>
              <p class="product-item-price">19,900원</p>
            </div>
            <div class="rank-label">
              <p>5</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
