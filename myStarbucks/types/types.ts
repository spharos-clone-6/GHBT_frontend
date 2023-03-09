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
  id: number;
  imgSrc: string;
  title: string;
  price: number;
  isBest: number;
}