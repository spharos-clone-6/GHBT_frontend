import React from "react";
import MainHeaderBottom from "./MainHeader/MainHeaderBottom";
import MainHeaderTop from "./MainHeader/MainHeaderTop";

export default function MainHeader() {
  return (
    <header>
      <MainHeaderTop />
      <MainHeaderBottom />
    </header>
  );
}
