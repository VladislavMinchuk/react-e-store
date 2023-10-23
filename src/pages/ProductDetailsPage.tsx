// import ProductsLayout from "../layouts/ProductsLayout";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import { productImagesArr } from "../constans";
import ProductOrderQuickForm from "../components/ProductOrderQuickForm.";


const ProductDetailsPage = () => {
  const { id } = useParams();
  // Static data
  const productObject = {
    id,
    title: 'Shoes product title',
    price: 120,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facere! At, magni eaque? Nobis.",
    images: productImagesArr,
    shoesSize: [
      {size: '36', id: 1},
      {size: '37', id: 2},
      {size: '38', id: 3},
      {size: '39', id: 4},
    ]
  };

  return (
    <div className="container py-4">
      <div className="single-product-page">
        <section className="single-product-page__main-section">
          {/* breadcrumbs navigation */}
          <Row>
            <Col lg={8}>
              <div className="single-product-page__content-wrap">
                <ProductCarousel imagesArray={productObject.images}></ProductCarousel>
                <p>{productObject.description}</p>
              </div>
            </Col>
            <Col lg={4}>
              <aside>
                <h2>{productObject.title}</h2>
                <p>Price: {productObject.price}$</p>
                <ProductOrderQuickForm shoesSize={productObject.shoesSize}></ProductOrderQuickForm>
              </aside>
            </Col>
          </Row>
        </section>
        <section>
          {/* Recomended section */}
        </section>
      </div>
    </div>
  )
}

export default ProductDetailsPage;
