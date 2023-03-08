import React from "react";
import SearchHistoryList from "../../src/components/Search/SearchHistoryList";
import SearchRecommandList from "../../src/components/Search/SearchRecommandList";
import SearchTop from "../../src/components/Search/SearchTop";

export default function search() {
  return (
    <>
      <SearchTop />
      <SearchHistoryList />
      <SearchRecommandList />
    </>
  );
}
