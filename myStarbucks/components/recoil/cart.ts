import { FROZEN_CART_LIST, GENERAL_CART_LIST } from "@/data/StaticData";
import { IcartList } from "@/types/types";
import { atom } from "recoil";

export const generalCartListState = atom<IcartList>({
  key: "generalCart",
  default: [],
});

export const frozenCartListState = atom<IcartList>({
  key: "frozenCart",
  default: [],
});
