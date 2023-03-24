import React from "react";

function DetailImage(props: { url: string }) {
  return (
    <img
      src={`https://storage.googleapis.com/ghbt/product_image/${props.url}`}
      alt=""
    />
  );
}

export default React.memo(DetailImage);
