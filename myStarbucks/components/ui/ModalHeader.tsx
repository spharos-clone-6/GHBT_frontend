/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

export default function ModalHeader(props: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const header = css`
    display: flex;
    text-align: center;
    align-items: center;
    justify-contents: space-between;
    padding: 0px 10px;
  `;

  const item = css`
    flex-grow: 3;
  `;

  const closeModal = () => {
    props.setModalOpen(false);
  };

  return (
    <div css={header}>
      <div> </div>
      <h1 css={item}>주문 수정</h1>
      <img
        src="/images/icons/close.png"
        style={{ width: "15px" }}
        onClick={closeModal}
      />
    </div>
  );
}
