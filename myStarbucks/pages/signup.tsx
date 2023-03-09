import React from "react";

export default function signup() {
  return (
    <>
      <header>
        <a href="javascript:window.history.back();">
          <img src="./assets/images/icons/close.png" className="back-button" />
        </a>
      </header>
      <div>
        <section className="greeting first-section">
          <img id="starbucks-logo" src="./assets/images/starbucks-logo.png" />
          <h2 className="signup-info">
            고객님
            <br />
            환영합니다!
          </h2>
        </section>
        <section className="agree-input" id="agree-main">
          <input type="checkbox" id="all-agree" name="all-agree" />
          <label htmlFor="all-agree">약관 전체동의</label>
          <hr />
          <input type="checkbox" id="tos-agree" name="" />
          <label htmlFor="tos-agree">이용약관 동의(필수)</label>
          <a href="/best_cake.html">
            <img
              className="arrow"
              src="/assets/images/icons/arrow-point-to-right.png"
            />
          </a>
          <br />
          <input type="checkbox" id="personal-agree" name="" />
          <label htmlFor="personal-agree">
            개인정보 수집 및 이용동의(필수)
          </label>
          <a>
            <img
              className="arrow"
              src="/assets/images/icons/arrow-point-to-right.png"
            />
          </a>
          <br />
          <input type="checkbox" id="advertising-agree" name="" />
          <label htmlFor="advertising-agree">광고성 정보 수신동의(선택)</label>
          <a>
            <img
              className="arrow"
              src="/assets/images/icons/arrow-point-to-right.png"
            />
          </a>
          <br />
          <div className="advertising-info">
            <p>광고성 정보 수신 방법(선택)</p>
            <input type="checkbox" id="advertising-email" />
            <label htmlFor="advertising-email">E-mail</label>
            <input type="checkbox" id="advertising-sms" />
            <label htmlFor="advertising-sms">SMS</label>
          </div>
        </section>
        <section className="submit-container">
          <a href="/signup_certified.html">
            <button type="submit">다음</button>
          </a>
        </section>
      </div>
    </>
  );
}
