/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function CartEmpty() {
  const wrapper = css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `;

  const icon = css`
    width: 5%;
  `;

  const contents = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    opacity: 70%;
  `;

  return (
    <div css={wrapper}>
      <div css={contents}>
        <img src="/images/icons/shopping-cart.svg" css={icon} />
        <p>장바구니가 비어있습니다.</p>
      </div>
    </div>
  );
}
