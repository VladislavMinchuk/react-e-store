import { ReactNode } from "react";
import { Container, Row, Col } from "react-bootstrap";

type ProductsLayoutProps = {
  title: string,
  mainContent: ReactNode,
  aside: ReactNode
}

const ProductsLayout = ({ aside, mainContent, title }: ProductsLayoutProps) => {
  return (
    <div className="products-layout">
      <section>
        <Container>
          <header className="mb-4">
            <h2>{ title }</h2>
          </header>
          <Row>
            <Col xs={12} lg={4} xl={3}>
              { aside }
            </Col>
            <Col xs={12} lg={8} xl={9}>
              { mainContent }
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ProductsLayout;