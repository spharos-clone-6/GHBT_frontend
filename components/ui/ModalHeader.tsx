/** @jsxImportSource @emotion/react */
import { contentsModalState } from "@/state/contentsModalState";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import CloseIcon from "./CloseIcon";

interface modalHeader {
  headerName?: string;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalHeader({ headerName, setModalOpen }: modalHeader) {
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
    setModalOpen && setModalOpen(false);
  };

  return (
    <div css={header}>
      <div> </div>
      <h3 css={item}>{headerName}</h3>
      <CloseIcon
        style={{ padding: "16px 6px" }}
        onClickHandler={closeModal}
        width={15}
        height={15}
      />
    </div>
  );
}
