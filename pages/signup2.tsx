import BackIcon from "@/components/ui/BackIcon";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import Config from "@/configs/config.export";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRecoilTransactionObserver_UNSTABLE } from "recoil";

export default function SignUp02() {
  const { baseUrl } = Config();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailTokenValidation, setEmailTokenValidation] = useState(false);
  const [emailToken, setEmailToken] = useState("");
  const [password, SetPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const [emailErrMsg, setEmailErrMsg] = useState<string | null>("");
  const [emailValidationErrMsg, setEmailValidationErrMsg] = useState<
    string | null
  >("");
  const [passwordErrMsg, SetPasswordErrMsg] = useState<string | null>("");
  const [passwordValidationErrMsg, setPasswordValidationErrMsg] = useState<
    string | null
  >("");

  const [isTokenSend, setIsTokenSend] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [time, setTime] = useState(180);

  const [isShow, setIsShow] = useState("none");

  const emailRegex =
    /^[0-9a-zA-Z]([-_ .]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;

  //이메일 확인
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!emailRegex.test(e.target.value))
      setEmailErrMsg(`⚠️ 이메일 형식을 확인해주세요`);
    else setEmailErrMsg(null);
  };

  //비밀번호 변경 로직
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    SetPassword(e.target.value);
    if (!passwordRegex.test(e.target.value))
      SetPasswordErrMsg("비밀번호 형식이 잘못 되었습니다.");
    else SetPasswordErrMsg("");
    //비밀번호 검증과 현재 비밀번호가 일치하지 않다면 setPasswordValidationErrmsg 설정
    if (e.target.value === passwordValidation) setPasswordValidationErrMsg("");
    else if (e.target.value && e.target.value !== passwordValidation)
      setPasswordValidationErrMsg("비밀번호가 일치하지 않습니다.");
  };
  const onChangeToken = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailToken(e.target.value);
  };

  //비밀번호 검증 로직
  const onChangePasswordValidation = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValidation(e.target.value);
    if (password !== e.target.value)
      setPasswordValidationErrMsg("비밀번호가 일치하지 않습니다.");
    else setPasswordValidationErrMsg("");
  };

  //이메일 검증 및 인증번호 전달
  const sendEmailValidate = async () => {
    // 이메일 양식 체크
    if (!emailErrMsg === null || email === "") {
      alert("이메일 양식을 지켜주세요");
      return;
    }

    //중복 이메일 체크
    const check = await axios
      .post(`${baseUrl}/api/email/duplicate`, { email })
      .then((res) => {
        return res.status;
      })
      .catch((error) => {
        return error.response.status;
      });

    if (check === 409) {
      alert("중복된 이메일입니다");
      return;
    }
    setIsShow("flex");

    //있으면 이메일 보내기
    axios
      .post(`${baseUrl}/api/email`, {
        email,
      })
      .catch((error) => {
        console.log(error);
        alert("인증요청 실패");
      });
  };

  // 인증번호 검증 및 검증 후 알림, 검증버튼 제거
  const checkTokenValidation = async () => {
    const validation = await axios
      .post(`${baseUrl}/api/email/validate`, {
        email: email,
        authCode: emailToken,
      })
      .then((res) => {
        return res;
      });
    console.log(validation);
    if (validation.status === 202) {
      setEmailTokenValidation(false);

      alert("인증 실패");
      return;
    }

    setEmailTokenValidation(true);
    alert("인증 성공!!");
    setIsShow("none");
  };

  const onClickSignup = async () => {
    //회원가입 요청
    if (passwordErrMsg || passwordValidationErrMsg || emailErrMsg) {
      alert("필수입력란을 확인해 주세요!!!");
      return;
    } else if (!emailTokenValidation) {
      alert("메일 인증해주세요");
      return;
    } else if (!passwordErrMsg && !passwordValidationErrMsg && !emailErrMsg) {
      await axios
        .post(`${baseUrl}/api/auth/signup`, { email, password })
        .then((res) => {
          router.push("/login");
        })
        .catch((error) => {
          alert("회원가입에 실패하였습니다.");
          return;
        });
    }
  };

  return (
    <>
      <header>
        <div className="signup-header">
          <BackIcon />
        </div>
      </header>

      <section className="greeting">
        <h2 className="signup-info">
          아이디와 비밀번호를
          <br />
          입력해 주세요.
        </h2>
      </section>

      <section id="email-input">
        <input
          type="text"
          id="user_email"
          name="email"
          placeholder=""
          onChange={onChangeEmail}
        />
        <div style={{ width: `60px` }}>
          <Button btnType={"button"} btnEvent={sendEmailValidate}>
            인증
          </Button>
        </div>
      </section>
      <div className="signup-error">{emailErrMsg}</div>

      <section id="email-input-token" style={{ display: isShow }}>
        <input
          type="text"
          id="user_token_validate"
          placeholder="인증번호"
          onChange={onChangeToken}
        />
        <div style={{ width: `60px` }}>
          <Button btnType={"button"} btnEvent={checkTokenValidation}>
            확인
          </Button>
        </div>
      </section>
      <section id="id-password-input">
        <input
          type="password"
          id="user_password"
          name="password"
          placeholder="비밀번호 (10-20자리 이내)"
          onChange={onChangePassword}
        />
        <div className="signup-error" style={{ paddingLeft: "0" }}>
          {passwordErrMsg}
        </div>
        <input
          type="password"
          id="user_password_check"
          name="password_check"
          placeholder="비밀번호 확인"
          onChange={onChangePasswordValidation}
        />
        <div className="signup-error" style={{ paddingLeft: "0" }}>
          {passwordValidationErrMsg}
        </div>
      </section>
      <BottomFixedContainer>
        <Button btnType={"submit"} btnEvent={onClickSignup}>
          회원가입
        </Button>
      </BottomFixedContainer>
    </>
  );
}
