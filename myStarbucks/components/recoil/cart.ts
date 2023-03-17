import { cartList } from "@/types/types";
import { atom } from "recoil";

export const itemList = atom<cartList>({
  key: "itemList",
  default: [],
});

export const checkAll = atom({
  key: "checkAll",
  default: false,
});
