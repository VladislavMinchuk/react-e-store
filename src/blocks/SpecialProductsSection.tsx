import { Col, Row } from "react-bootstrap";
import ProductListGrid from "./ProductsListGrid";
import { staticProductList } from "../mock-data";

const SpecialProductsSection = () => {
  return (
    <section className="py-3">
      <h2 className="text-center font-monospace text-info fw-bold mb-3">FlipShoes Store</h2>
      <Row className="justify-content-md-center">
        <Col md={8} className="mb-4 text-center">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quaerat dolor quos nemo recusandae temporibus nihil dicta vero earum odit quo excepturi non dolore, ad facere nisi dolorum. Nobis, molestiae?</p>
        </Col>
        <ProductListGrid productList={staticProductList.slice(0, 4)} xl={3} xxl={3}></ProductListGrid>
      </Row>
    </section>
  )
};

export default SpecialProductsSection;
