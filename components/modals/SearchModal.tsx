import React from "react";
import SearchHistoryList from "../widgets/SearchHistoryList";
import SearchRecommandList from "../widgets/SearchRecommandList";
import SearchTop from "../widgets/SearchTop";

export interface ChildProps {
  isView: Boolean;
  setIsView: React.Dispatch<React.SetStateAction<Boolean>>; //setIsView의 타입
}

export default function SearchModal({ isView, setIsView }: ChildProps) {
  if (!isView) {
    return null;
  }

  const modalStyle: Object = {
    position: "fixed",
    backgroundColor: "white",
    top: "0",
    left: "0",
    zIndex: 999,
    width: "100%",
    height: "100%",
  };

  return (
    <div style={{ zIndex: "100" }}>
      <SearchTop isView={isView} setIsView={setIsView} />
      <SearchHistoryList />
      <SearchRecommandList />
    </div>
  );
}
