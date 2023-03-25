import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const recentSearchKeyword = atom<string[]>({
  key: "data",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export function useRecent() {
  const [isInitial, setIsInitial] = useState(true);
  const [keyword, setKeyword] = useRecoilState(recentSearchKeyword);

  useEffect(() => {
    setIsInitial(false);
  });

  return [isInitial === true ? [] : keyword, setKeyword] as const;
}
