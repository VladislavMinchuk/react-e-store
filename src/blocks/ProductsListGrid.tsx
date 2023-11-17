import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import ProductContainer from "../components/ProductCardContainer";
import { IProductItem } from "../interfaces";

export type ProductListGridProps = {
  productList: Array<IProductItem>,
  xs?: number,
  md?: number,
  lg?: number,
  xl?: number,
  xxl?: number,
};

const ProductListGrid:FC<ProductListGridProps> = ({
    productList, xs=12, md=12, lg=6, xl=4, xxl=4 // Default values
  }) => {
  return (
    <Row>
      { productList.map((productItem, idx) => {
        return (
          <Col key={idx} xs={xs} md={md} lg={lg} xl={xl} xxl={xxl} className="mb-3 mb-lg-4">
            <ProductContainer productItem={productItem}></ProductContainer>
          </Col>
        );
      }) }
    </Row>
  );
};

export default ProductListGrid;