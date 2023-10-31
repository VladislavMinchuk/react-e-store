import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

// TODO: replace types based on interfaces
export type ProductListGridProps = {
  productList: Array<{}>,
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
      { productList.map((productItem) => {
        return (
          <Col xs={xs} md={md} lg={lg} xl={xl} xxl={xxl} className="mb-3 mb-lg-4">
            <ProductCard></ProductCard>
          </Col>
        );
      }) }
    </Row>
  );
};

export default ProductListGrid;