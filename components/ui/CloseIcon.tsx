import React, { CSSProperties } from "react";
import Image from "next/image";

export default function CloseIcon(props: {
  onClickHandler?: React.MouseEventHandler<HTMLImageElement> | undefined;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      src="/images/icons/close.png"
      alt="닫기 아이콘"
      onClick={props.onClickHandler}
      width={20}
      height={20}
      className={props.className}
      style={props.style}
    />
  );
}
