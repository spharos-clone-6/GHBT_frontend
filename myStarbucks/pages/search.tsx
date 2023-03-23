import SearchHistoryList from "@/components/widgets/SearchHistoryList";
import SearchRecommandList from "@/components/widgets/SearchRecommandList";
import SearchTop from "@/components/widgets/SearchTop";
import React from "react";

export default function search() {
  return (
    <>
      <SearchTop
        isView={true}
        setIsView={function (value: React.SetStateAction<Boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SearchHistoryList />
      <SearchRecommandList />
    </>
  );
}
