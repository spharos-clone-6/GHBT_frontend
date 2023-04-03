/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { css } from "@emotion/react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import axios from "axios";
import { AT } from "@/data/StaticData";
import Config from "@/configs/config.export";
import { useSetRecoilState } from "recoil";
import { orderState } from "@/state/orderState";

export default function PaySuccess() {
  const router = useRouter();
  const container = useRef<any>();
  const pgToken = router.query.pg_token;
  const baseUrl = Config();
  const setOrder = useSetRecoilState(orderState);

  const onClickHandler = async () => {
    let config = {
      headers: { Authorization: AT },
      params: {
        pgToken: pgToken,
      },
    };

    const result = await axios.get(
      `http://localhost:8080/api/payment/kakaopay-approve`,
      config
    );
    console.log(result);
    setOrder(result.data);

    axios
      .post(
        "http://localhost:8080/api/purchase/end",
        {},
        {
          headers: {
            Authorization: AT,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log("에러: ", err));

    router.push("/order_complete");
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
