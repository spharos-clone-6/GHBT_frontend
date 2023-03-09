import React from 'react'

export default function event_cake() {
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
                <li className="active">
                  <a href="event.html">케이크</a>
                </li>
                <li>
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
              src="assets/images/event/event_cake.jpg"
              width="100%"
              height="100%"
            />
          </div>
        </section>
        <section id="event-product">
          <div className="product-container">
            <div className="product-item">
              <img src="assets/images/event/cake/01.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="product-item-name">부드러운 티라미수 롤케이크</p>
                <p className="product-item-price">19,900원</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/event/cake/02.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="product-item-name">별의 별 케이크</p>
                <p className="product-item-price">25,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/event/cake/03.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="product-item-name">더블 초콜릿 케이크</p>
                <p className="product-item-price">33,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/event/cake/04.jpg" className="thumbnail" />
              <div className="product-item-info">
                <p className="product-item-name">부드러운 고구마 생크림 케이크</p>
                <p className="product-item-price">33,000원</p>
              </div>
            </div>
            <div className="product-item">
              <img src="assets/images/event/cake/05.jpg" className="thumbnail" />
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
              ∙ 택배를 통해 배송되는 냉동 상품입니다. 매장을 통한 구매, 교환 혹은
              반품은 불가합니다.
              <br />
              ∙ 사진은 연출된 이미지 컷으로 실제와 다를 수 있습니다.
              <br />
              ∙ 한정 수량으로 제작되어 조기 소진될 수 있습니다.
              <br />
              ∙ 상품에 대한 자세한 정보 및 구매, 교환, 환불 등 서비스 관련 내용은 각
              상품의 상세페이지에서 확인하시기 바랍니다.
              <br />
              ∙ 무료 음료 쿠폰은 온라인 스토어에서 구매하신 홀케이크의 수량만큼
              ‘수신자‘에게 지급됩니다.
              <br />
              ∙ 무료 음료 쿠폰은 배송 완료일로부터 9일차에 카카오톡 알림톡으로
              발송되며, 알림톡 발송 실패 시 문자(LMS)로 발송됩니다.
              <br />
              ∙ 무료 음료 쿠폰에 대한 자세한 정보는 각 상품의 상세페이지에서
              확인하시기 바랍니다.
              <br />
              ∙ 구매 별은 스타벅스 리워드 웰컴, 그린, 골드 레벨 회원이 본인 계정에
              등록된 스타벅스 카드를 이용하여 온라인 스토어에서 구매 시 적립됩니다.
              <br />
              (단, 스타벅스 카드 결제 금액 1천원 이상인 경우에만 별 적립 대상에
              포함)
              <br />
              ∙ 구매 별 적립 대상자가 1만원 이상 결제 시, 배송비를 제외한 총
              결제금액 1만원 당 이벤트 별 1개가 적립됩니다.
              <br />
              ∙ 별은 배송완료일로부터 9일차에 '구매자'에게 적립되며, 별 적립 이후
              상품을 반품할 경우 적립된 별은 회수됩니다. (불량 등의 사유로 반품할
              경우에도 별은 회수됨)
              <br />
              ∙ 별 적립 일정은 당사 사정에 따라 변경될 수 있습니다.
              <br />∙ 적립된 별의 유효기간은 적립일로부터 1년입니다.
            </p>
          </details>
        </section>
        <footer></footer>
      </div>
    </>

  )
}
