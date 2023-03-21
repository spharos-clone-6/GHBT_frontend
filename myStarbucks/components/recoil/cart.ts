import { FROZEN_CART_LIST, GENERAL_CART_LIST } from "@/data/StaticData";
import { cartListType } from "@/types/types";
import { atom } from "recoil";
import CartItem from "../ui/CartItem";

export const generalCartListState = atom<cartListType>({
  key: "generalCart",
  default: [],
});

export const frozenCartListState = atom<cartListType>({
  key: "frozenCart",
  default: [],
});
