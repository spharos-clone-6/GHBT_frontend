import React from "react";
import Image from "next/image";

function DetailImage(props: { url: string }) {
  return (
    // <div style={{ width: "100%", position: "relative", height: "100%" }}>
    <Image
      src={`https://storage.googleapis.com/ghbt/product_image/${props.url}`}
      alt="상품상세이미지"
      fill
      sizes="100vw"
    />
    // </div>
  );
}

export default React.memo(DetailImage);
