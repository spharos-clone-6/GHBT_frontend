import React from "react";

export default function login(props: { isView: Boolean }) {
  if (!props.isView) {
    return null;
  }

  return (
    <div style={{ zIndex: "100" }}>
      <header>
        <a href="javascript:window.history.back();">
          <img src="./assets/images/icons/left.png" className="back-button" />
        </a>
      </header>
      <div>
        <section className="login-header">
          <h1>로그인</h1>
        </section>
        <section className="greeting">
          <img id="starbucks-logo" src="./assets/images/starbucks-logo.png" />
          <h2>
            안녕하세요.
            <br />
            스타벅스입니다.
          </h2>
          <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
        </section>
        <section id="login-input">
          <input type="text" placeholder="아이디" />
          <br />
          <input type="password" placeholder="비밀번호" />
        </section>
        <section id="login-service">
          <a>아이디 찾기</a>
          <a>비밀번호 찾기</a>
          <a>회원가입</a>
        </section>
        <section className="submit-container">
          <button type="submit">로그인하기</button>
        </section>
      </div>
    </div>
  );
}
