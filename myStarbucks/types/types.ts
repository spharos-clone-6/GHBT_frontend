export interface user {
  id: number;
  name: string;
  email: string;
  address?: string;
}

export interface recommandTitle {
  id: number;
  title: string;
  data: object;
}

export interface productType {
  createDate?: string;
  updateDate?: string;
  id: number;
  name: string;
  price: number;
  description?: string;
  thumbnailUrl: string;
  stock?: number;
  isBest: boolean;
  isNew: boolean;
  likeCount?: number;
}

export interface categoryType {
  id: number;
  name: string;
  type?: string;
}

export interface eventType {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  descriptionUrl: string;
}

// 장바구니 개별 상품
export interface cartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// cartItem을 객체로 갖는 배열의 인터페이스 선언
export interface IcartList extends Array<cartItem> {}

export interface modal {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>; //setIsView의 타입
}
