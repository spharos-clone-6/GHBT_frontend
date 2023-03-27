import React from "react";
import Image from "next/image";

function DetailImage(props: { url: string }) {
  return (
    <img
      src={`https://storage.googleapis.com/ghbt/product_image/${props.url}`}
      alt="상세이미지"
      width={"100%"}
    />
  );
}

export default React.memo(DetailImage);
