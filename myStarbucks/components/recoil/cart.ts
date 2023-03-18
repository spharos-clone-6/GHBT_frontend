import { IcartList } from "@/types/types";
import { atom } from "recoil";

export const itemList = atom<IcartList>({
  key: "itemList",
  default: [],
});

export const checkAll = atom<boolean>({
  key: "checkAll",
  default: false,
});
