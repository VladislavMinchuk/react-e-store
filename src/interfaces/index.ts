export interface IProductItem {
  id: number,
  title: string,
  price: number,
  description: string,
  images: Array<string>, // image URL
  shoesSize: Array<ISize>
};

export interface ISize {
  id: number,
  size: string
};

export interface IProductCartItem {
  id: number,
  title: string,
  productImage: string, // url
  price: number,
  quantity: number | string,
  size: string
};

export interface ICartEntity {
  cartId: number,
  products: Array<IProductCartItem>,
  payment: IPaymentCartEntity
};

export interface IPaymentCartEntity {
  total: number
}

export interface IPaginationRequest {
  page: number,
  perPage: number
}