/** @jsxImportSource @emotion/react */
import { contentsModalState } from "@/state/contentsModalState";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import CloseIcon from "./CloseIcon";

export default function ModalHeader(props: { headerName?: string }) {
  const { headerName } = props;
  const setContentsIsView = useSetRecoilState<boolean>(contentsModalState);

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
    setContentsIsView(false);
  };

  return (
    <div css={header}>
      <div> </div>
      <h2 css={item}>{headerName}</h2>
      <CloseIcon
        style={{ padding: "16px 6px" }}
        onClickHandler={closeModal}
        width={15}
        height={15}
      />
    </div>
  );
}
