import React from "react";

export default function contents() {
  return (
    <div>
      <section className="contents-head">
        {/* 닫기 */}
        <div className="close-icon">
          <img src="assets/images/icons/menu.svg" alt="" />
        </div>
        {/*본문*/}
        <div className="contents-msg">
          <div className="msg-title">Sign in to Online Store</div>
          <div>
            <a href="">로그인</a> 후 이용해 보세요.
          </div>
        </div>
        <hr className="contents-line" />
      </section>
      {/* 제품 카테고리 */}
      <section id="category-items">
        <div className="get-all-items">
          {/* button onClick핸들러에 string이 들어가지 않아 일단 삭제 */}
          <button type="button" onClick="location.href=''">
            <a href=""> 전체상품보기 </a>
            <span>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </span>
          </button>
        </div>
        <div className="contents-container">
          <button
            type="button"
            className="category-button"
            onClick="location.href=''"
          >
            <div className="category">
              <div className="category-img">
                <img
                  src="assets/images/products/category/category-cake.jpg"
                  alt="케이크"
                />
              </div>
              <div className="category-name">
                <p>케이크</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick="location.href=''"
          >
            <div className="category">
              <div className="category-img">
                <img
                  src="assets/images/products/category/category-tumblr.jpg"
                  alt="텀블러/보온병"
                />
              </div>
              <div className="category-name">
                <p>텀블러/보온병</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick="location.href=''"
          >
            <div className="category">
              <div className="category-img">
                <img
                  src="assets/images/products/category/category-cup.jpg"
                  alt="머그컵"
                />
              </div>
              <div className="category-name">
                <p>머그컵</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick="location.href=''"
          >
            <div className="category">
              <div className="category-img">
                <img
                  src="assets/images/products/category/category-lifestyle.jpg"
                  alt="라이프스타일"
                />
              </div>
              <div className="category-name">
                <p>라이프스타일</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick="location.href=''"
          >
            <div className="category">
              <div className="category-img">
                <img
                  src="assets/images/products/category/category-tea.jpg"
                  alt="티/커피용품"
                />
              </div>
              <div className="category-name">
                <p>티/커피용품</p>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="category-button"
            onClick="location.href=''"
          >
            <div className="category">
              <div className="category-img">
                <img
                  src="assets/images/products/category/category-set.jpg"
                  alt="세트"
                />
              </div>
              <div className="category-name">
                <p>세트</p>
              </div>
            </div>
          </button>
        </div>
      </section>
      {/*기획전/베스트 이동*/}
      <section id="nav-event-best">
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <span className="title">기획전</span>
                <br />
                <span>진행중인 기획전을 만나보세요.</span>
              </div>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </div>
          </button>
          <hr />
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <span className="title">베스트</span>
                <br />
                <span>스타벅스의 베스트 상품을 만나보세요.</span>
              </div>
              <img src="assets/images/icons/contents/right-arrow.png" alt="" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
