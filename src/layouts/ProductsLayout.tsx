import { ReactNode } from "react";

type ProductsLayoutProps = {
  children: ReactNode
}

const ProductsLayout = ({ children }: ProductsLayoutProps) => {
  return (
    <div className="products-layout">
      aside
      { children }
    </div>
  );
}

export default ProductsLayout;