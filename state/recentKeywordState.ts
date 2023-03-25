import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const recentSearchKeyword = atom<string[]>({
  key: "data",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
