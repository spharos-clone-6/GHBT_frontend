/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { css } from "@emotion/react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import axios from "axios";
import { AT } from "@/data/StaticData";
import Config from "@/configs/config.export";

export default function PaySuccess() {
  const router = useRouter();
  const container = useRef<any>();
  const pgToken = router.query.pg_token;
  const baseUrl = Config();

  const onClickHandler = async () => {
    // router.push("/order_complete");
    let config = {
      headers: { Authorization: AT },
      params: {
        pgtoken: pgToken,
      },
    };

    const result = await axios.get(
      `${baseUrl}/api/payment/kakaopay-approve`,
      config
    );
    console.log(result);
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("public/lottie/paycharacter.json"),
    });
    lottie.setSpeed(0.6);
  }, []);

  console.log(pgToken);
  return (
    <div css={layout}>
      <div css={contents}>
        <div
          ref={container}
          style={{
            width: "60%",
            height: "60%",
            paddingRight: "30px",
          }}
        ></div>
        확인을 누르시면 결제가 완료됩니다.
        <div style={{ width: "40%", textAlign: "center" }}>
          <Button btnType="button" btnEvent={onClickHandler}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}

const layout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const contents = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;
