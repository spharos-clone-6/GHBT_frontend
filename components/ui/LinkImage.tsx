/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";

export default function LinkImage(props: {
  route: string;
  imageSrc: string;
  alt: string;
}) {
  return (
    <Link href={props.route}>
      <img
        src={props.imageSrc}
        width="100%"
        height="330px"
        alt={props.alt}
        style={{ objectFit: "cover", objectPosition: "0 0" }}
      />
    </Link>
  );
}

// const style = css`
//   img {
//     width: 100%;
//     height: 100%
//     position: relative !important;
//     object-fit: cover;
//   }
// `;
