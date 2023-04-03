/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Image from "next/image";
import BottomFixedContainer from "@/components/ui/BottomFixedContainer";
import Button from "@/components/ui/Button";
import { useRecoilValue } from "recoil";
import { orderState } from "@/state/orderState";

export default function OrderComplete() {
  const order = useRecoilValue(orderState);

  return (
    <div id="order-complete">
      <div css={layout}>
        <h1 style={{ margin: "0" }}> 주문이 완료되었습니다. </h1>
      </div>
      <div css={contents}>
        <h2>배송 정보</h2>

        <div id="pay-delivery" style={{ padding: "0" }}>
          <div className="delivery-info-title"></div>
          <div className="delivery-info">
            <div className="delivery-name">
              <div className="name">이름 (집)</div>
            </div>
            <p>(우편번호) 기본주소 상세주소</p>
            <p>전화번호</p>
          </div>
          <div css={div}>요청사항</div>
        </div>
      </div>

      <div css={contents}>
        <h2>
          주문 상품{" "}
          <span style={{ color: "var(--color-light-green)" }}>(1)</span>
        </h2>
        <div css={product}>
          <Image
            src="/images/products/cake.jpg"
            width={110}
            height={110}
            alt={"초기화 버튼"}
            css={img}
          />
          <div style={{ padding: "0px 20px " }}>
            <p style={{ margin: "0px", fontSize: "0.85rem" }}>
              스타벅스 시럽 어소스먼트 3개입
            </p>
            <p style={{ fontSize: "0.75rem", opacity: "0.6" }}>1개</p>
          </div>
        </div>
      </div>

      <div css={contents} style={{ marginBottom: "70px" }}>
        <div css={price}>
          <div>
            <h2>결제 금액</h2>
          </div>
          <div>
            <h2>26,000원</h2>
          </div>
        </div>
        <div css={price}>
          <div>
            <p style={{ fontSize: "0.9rem" }}>카카오페이</p>
          </div>
          <div>
            <p style={{ fontSize: "0.9rem" }}>26,000원</p>
          </div>
        </div>
      </div>

      <BottomFixedContainer>
        <div css={buttonContainer}>
          <Button
            btnType="button"
            btnEvent={() => alert("상세정보 확인")}
            type="white"
          >
            상세정보 확인
          </Button>
          <Button btnType="button" btnEvent={() => alert("메인으로 가기")}>
            메인으로 가기
          </Button>
        </div>
      </BottomFixedContainer>
    </div>
  );
}

const layout = css`
  background-color: white;
  padding: 70px 20px 20px 20px;
  margin: 0;
`;

const contents = css`
  margin-top: 10px;
  background-color: white;
  padding: 20px;
`;

const div = css`
  margin: 5px 0px;
  padding: 15px 0px 5px 0px;
  border-top: 1px solid rgba(128, 128, 128, 0.381);
  font-size: 0.9rem;
`;

const img = css`
  border-radius: 15%;
  border: 1px solid rgba(128, 128, 128, 0.381);
`;

const product = css`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

const price = css`
  display: flex;
  justify-content: space-between;
`;

const buttonContainer = css`
  display: flex;
  gap: 15px;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
`;
