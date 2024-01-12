export interface IProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<string>; // image URL
  shoesSize: Array<ISize>;
  colors: Array<IColor>
}

export interface ISize {
  id: number;
  size: string;
}

export interface IColor {
  id: number;
  title: string,
  colorCode: string; // should be HEX code
}

export interface IProductCartItem {
  id: number;
  title: string;
  productImage: string; // url
  price: number;
  quantity: number | string;
  size: string;
}

export interface ICartEntity {
  cartId: number;
  products: IProductCartItem[];
  payment: IPaymentCartEntity;
}

export interface IPaymentCartEntity {
  total: number;
}

export interface IPaginationRequest {
  page: number;
  perPage: number;
}
