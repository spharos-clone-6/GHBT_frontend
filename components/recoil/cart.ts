import { FROZEN_CART_LIST, GENERAL_CART_LIST } from "@/data/StaticData";
import { cartListType } from "@/types/types";
import { atom } from "recoil";
import CartItem from "../ui/CartItem";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "cartOrder",
});

export const generalCartListState = atom<cartListType>({
  key: "generalCart",
  default: [],
});

export const frozenCartListState = atom<cartListType>({
  key: "frozenCart",
  default: [],
});

export const cartOrder = atom<cartListType>({
  key: "cartOrder",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
