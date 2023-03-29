import { receipt } from "@/types/types";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({});

export const payReceipt = atom<receipt>({
  key: "receipt",
  default: {
    purchaseList: [],
    shippingAddress: "",
    shippingPrice: 0,
    paymentType: "",
    couponId: 0,
    couponPrice: 0,
    cashReceipts: "",
    totalPrice: 0,
  },
  effects_UNSTABLE: [persistAtom],
});