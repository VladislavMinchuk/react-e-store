// import ProductsLayout from "../layouts/ProductsLayout";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="single-product-page">
        <section className="single-product-page__main-section">
          <div className="single-product-page__content-wrap">
            Single product Page {id}
            {/* breadcrumbs navigation */}
            {/* imgs carousel */}
            {/* description block */}
          </div>
          <aside>
            Title
            {/* title */}
            {/* price */}
            {/* select size */}
            {/* action buttons (add to cart) */}
          </aside>
        </section>
        <section>
          {/* Recomended section */}
        </section>
      </div>
    </div>
  )
}

export default SingleProductPage;
