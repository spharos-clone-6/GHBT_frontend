import SearchHistoryList from "@/components/widgets/SearchHistoryList";
import SearchRecommandList from "@/components/widgets/SearchRecommandList";
import SearchTop from "@/components/widgets/SearchTop";
import React from "react";

export default function Search() {
  return (
    <>
      <SearchTop />
      <SearchHistoryList />
      <SearchRecommandList />
    </>
  );
}
