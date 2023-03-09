import React from "react";
import SearchHistoryList from "components/Search/SearchHistoryList";
import SearchRecommandList from "components/Search/SearchRecommandList";
import SearchTop from "components/Search/SearchTop";

export default function search() {
  return (
    <>
      <SearchTop />
      <SearchHistoryList />
      <SearchRecommandList />
    </>
  );
}
