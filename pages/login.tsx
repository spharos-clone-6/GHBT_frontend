import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Config from "@/configs/config.export";
import { accessTokenState } from "@/state/accessTokenState";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import BackIcon from "@/components/ui/BackIcon";
import Link from "next/link";

export default function Login() {
  const { baseUrl } = Config();
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = async () => {
    const result = await axios
      .post(
        `${baseUrl}/api/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.headers?.authorization) {
          const setAccess = res.headers.authorization.replace(/Bearer /g, "");
          setAccessToken(setAccess);
          router.push("/");
        }
      })
      .catch((err) => {
        alert("로그인 실패!!!!");
      });
  };

  const setEmailFunction = (event: any) => {
    setEmail(event.target.value);
  };

  const setPasswordFunction = (event: any) => {
    setPassword(event.target.value);
  };

  // const modalStyle: Object = {
  //   position: "fixed",
  //   backgroundColor: "white",
  //   top: "0",
  //   left: "0",
  //   zIndex: 999,
  //   width: "100%",
  //   height: "100%",
  // };

  return (
    <div>
      <BackIcon />
      <div>
        <section className="login-header">
          <h1>로그인</h1>
        </section>
        <section className="greeting">
          <img id="starbucks-logo" src="./images/starbucks-logo.png" />
          <h2>
            안녕하세요.
            <br />
            스타벅스입니다.
          </h2>
          <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
        </section>
        <section id="login-input">
          <input type="text" placeholder="아이디" onChange={setEmailFunction} />
          <br />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={setPasswordFunction}
          />
        </section>
        <section id="login-service">
          <Link href="/">아이디 찾기</Link>
          <Link href="/">비밀번호 찾기</Link>
          <Link href="/">회원가입</Link>
        </section>
        <BottomFixedContainer>
          <Button btnType={"submit"} btnEvent={onClickLogin}>
            로그인하기
          </Button>
        </BottomFixedContainer>
      </div>
    </div>
  );
}
