import React from "react";

export default function productDetail() {
  return (
    <>
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
      </header>
      <section id="product-top">
        <div className="product-img">
          <img
            src="https://www.starbucks.co.kr:3443/upload/giftshop/goods/20230213/0ab0d443-af0e-4854-9c66-bd57b0174f02.jpg"
            alt=""
          />
        </div>
        <div className="product-info">
          <div className="product-name">
            <div>
              <p>
                23 체리블라썸 페탈 미르 보온병 976ml
                <span className="is-new">New</span>
              </p>
            </div>
            <div className="share-icon">
              <img src="./assets/images/icons/user.svg" alt="" />
            </div>
          </div>
          <div className="description">
            핑크와 퍼플 컬러로 포인트를 준 976ml 용량의 대형 보온병입니다.
          </div>
          <div className="price">78,000원</div>
        </div>
        <div className="notice">
          <h3>공휴일로 인한 배송지연 안내</h3>
          <p>
            [3.1절(공휴일) - 케이크 배송 안내]
            <br />
            - 발송마감 : 2월 27일(월) 12:00까지 배송요청된 주문까지
            <br />
            - 발송재개 : 3월 2일(목)~
            <br />
            ※ 3월2일(목) 이후 발송건은 주문량 및 택배사 상황에 따라 1~2일 배송이
            지연될 수 있으니 양해 부탁드립니다.
            <br />
          </p>
        </div>
      </section>
      <section id="product-detail">
        <p>상품 정보</p>
        <img src="./assets/images/products/product-detail.png" alt="" />
        {/*JS "상품정보 더보기" 버튼 추가 필요*/}
      </section>
      <section className="product-recommand">
        <p>체리블라썸 상품</p>
      </section>
      <section className="product-recommand">
        <p>다른 고객이 함께 본 상품</p>
      </section>
      <section className="detail-info">
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">이용조건 및 배송안내</p>
              </div>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">상품제공정보고시</p>
              </div>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">교환/반품 안내</p>
              </div>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">취소/환불 안내</p>
              </div>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
      </section>
      <section id="purchase-button">
        {" "}
        {/*class="submit-container"*/}
        <div className="toggle-icon" />
        <button>구매하기</button>
      </section>
    </>
  );
}
