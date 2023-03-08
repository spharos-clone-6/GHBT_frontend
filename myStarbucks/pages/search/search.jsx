import React from "react";
import LatestSearchList from "../../src/components/search/SearchHistoryList";
import SearchRecommandList from "../../src/components/search/SearchRecommandList";
import SearchTop from "../../src/components/search/SearchTop";

export default function search() {
  return (
    <>
      <SearchTop />
      <LatestSearchList />
      <SearchRecommandList />
    </>
  );
}
