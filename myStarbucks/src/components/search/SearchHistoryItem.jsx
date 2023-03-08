import React from "react";

export default function LatestSearchItem({ item }) {
  return (
    <div className="keywords">
      {item}
      <img src="/images/icons/close.png" />
    </div>
  );
}
