import React from 'react'

export default function event_choonsik() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="StarBucks Clone Site" />
      <meta name="keywords" content="StarBucks, Clone, Site" />
      <meta name="author" content="Jason Ahn" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <title>StarBucks Clone Site</title>
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
                <li className="active">
                  <a href="">기획전</a>
                </li>
                <li>
                  <a href="best.html">베스트</a>
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
                <li>
                  <a href="event.html">케이크</a>
                </li>
                <li className="active">
                  <a href="event_choonsik.html">바리스타 춘식</a>
                </li>
                <li>
                  <a href="event_desk.html">핸디 데스크</a>
                </li>
                <li>
                  <a href="event_star.html">별★ 적립 혜택</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="event-info" className="first-section-sub-one">
          <div className="event-info">
            <img
              src="assets/images/event/event_choonsik.png"
              width="100%"
              height="100%"
            />
          </div>
        </section>
        <section id="event-product">
          <div className="product-container">
            <div className="product-item">
              <img
                src="assets/images/event/choonsik/01.jpg"
                className="thumbnail"
              />
              <div className="product-item-info">
                <p className="product-item-name">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
            </div>
            <div className="product-item">
              <img
                src="assets/images/event/choonsik/01.jpg"
                className="thumbnail"
              />
              <div className="product-item-info">
                <p className="product-item-name">별의 별 케이크</p>
                <p className="product-item-price">25,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img
                src="assets/images/event/choonsik/01.jpg"
                className="thumbnail"
              />
              <div className="product-item-info">
                <p className="product-item-name">더블 초콜릿 케이크</p>
                <p className="product-item-price">33,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img
                src="assets/images/event/choonsik/01.jpg"
                className="thumbnail"
              />
              <div className="product-item-info">
                <p className="product-item-name">부드러운 고구마 생크림 케이크</p>
                <p className="product-item-price">33,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img
                src="assets/images/event/choonsik/01.jpg"
                className="thumbnail"
              />
              <div className="product-item-info">
                <p className="product-item-name">블루베리 치즈 케이크</p>
                <p className="product-item-price">36,000원</p>
              </div>
            </div>
          </div>
        </section>
        <section className="notice">
          <details open="">
            <summary>기획전 유의사항</summary>
            <p>
              유의사항
              <br />
              -사진은 연출된 이미지컷으로 실제와 다를 수 있습니다.
              <br />
              -한정 수량으로 제작되어 조기 소진될 수 있습니다.
              <br />
              -각 상품별 ID당 5개씩 구매 가능합니다.
              <br />
              -상품에 대한 자세한 정보 및 구매, 교환, 환불 등 서비스 관련 내용은 각
              상세페이지에서 확인하시기 바랍니다.
            </p>
          </details>
        </section>
        <footer></footer>
      </div>
    </>

  )
}
