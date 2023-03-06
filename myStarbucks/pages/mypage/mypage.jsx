import React from 'react'

export default function mypage() {
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
                <li>
                  <a href="best.html">베스트</a>
                </li>
                <li className="active">
                  <a href="">마이페이지</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <section id="order-status">
          <div>
            <h2>주문/배송 현황</h2>
            <p>최근 3개월 동안 구매한 상품</p>
          </div>
          <div className="order-status-container">
            <div className="status-item">
              <p className="status-count" id="status-prepared-count">
                0
              </p>
              <p>상품준비중</p>
            </div>
            <div className="status-item">
              <img
                className="arrow"
                src="./assets/images/icons/contents/right-arrow.png"
              />
            </div>
            <div className="status-item">
              <p className="status-count" id="status-prepared-count">
                0
              </p>
              <p>배송준비중</p>
            </div>
            <div className="status-item">
              <img
                className="arrow"
                src="./assets/images/icons/contents/right-arrow.png"
              />{" "}
            </div>
            <div className="status-item">
              <p className="status-count" id="status-prepared-count">
                0
              </p>
              <p>배송중</p>
            </div>
            <div className="status-item">
              <img
                className="arrow"
                src="./assets/images/icons/contents/right-arrow.png"
              />{" "}
            </div>
            <div className="status-item">
              <p className="status-count" id="status-prepared-count">
                0
              </p>
              <p>배송완료</p>
            </div>
          </div>
        </section>
        <section className="management">
          <div id="service">
            <h2>서비스</h2>
            <div className="menu" id="order-details">
              <a href="/주문내역">
                <div className="menu-info">
                  <img
                    className="icon"
                    src="./assets/images/icons/service/shopping-list.png"
                  />
                  <p>주문 내역</p>
                </div>
                <img
                  className="arrow"
                  src="./assets/images/icons/arrow-point-to-right.png"
                />
              </a>
            </div>
            <div className="menu" id="giftbox">
              <a href="/선물함">
                <div className="menu-info">
                  <img
                    className="icon"
                    src="./assets/images/icons/service/present-box.png"
                  />
                  <p>선물함</p>
                </div>
                <img
                  className="arrow"
                  src="./assets/images/icons/arrow-point-to-right.png"
                />
              </a>
            </div>
            <div className="menu">
              <a href="/쿠폰">
                <div className="menu-info">
                  <img
                    className="icon"
                    src="./assets/images/icons/service/voucher.png"
                  />
                  <p>쿠폰</p>
                </div>
                <img
                  className="arrow"
                  src="./assets/images/icons/arrow-point-to-right.png"
                />
              </a>
            </div>
            <div className="menu" id="shipping-destinations">
              <a href="/배송지관리">
                <div className="menu-info">
                  <img
                    className="icon"
                    src="./assets/images/icons/service/delivery-truck.png"
                  />
                  <p>배송지 관리</p>
                </div>
                <img
                  className="arrow"
                  src="./assets/images/icons/arrow-point-to-right.png"
                />
              </a>
            </div>
            <div className="menu" id="receiving-notification">
              <a href="/입고알림내역">
                <div className="menu-info">
                  <img
                    className="icon"
                    src="./assets/images/icons/service/bell.png"
                  />
                  <p>입고 알림 내역</p>
                </div>
                <img
                  className="arrow"
                  src="./assets/images/icons/arrow-point-to-right.png"
                />
              </a>
            </div>
          </div>
          <div id="policy">
            <h2>약관 및 정책</h2>
            <div className="menu" id="consent">
              <a href="/이용동의">
                <div className="menu-info">
                  <img
                    className="icon"
                    src="./assets/images/icons/service/megaphone.png"
                  />
                  <p>배송지 정보 수집 및 이용 동의</p>
                </div>
                <img
                  className="arrow"
                  src="./assets/images/icons/arrow-point-to-right.png"
                />
              </a>
            </div>
          </div>
        </section>
        <footer></footer>
      </div>
    </>

  )
}
