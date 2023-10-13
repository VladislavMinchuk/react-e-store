import { Card, Button } from "react-bootstrap";
import ProductIMG from '../assets/images/adid_or_spez_01_lg.jpg';
import previewImg_01 from '../assets/images/adid_or_spez_01_sm.webp';
import previewImg_02 from '../assets/images/adid_or_spez_02_sm.webp';
import previewImg_03 from '../assets/images/adid_or_spez_03_sm.webp';
import previewImg_04 from '../assets/images/adid_or_spez_04_sm.webp';
import CardPreviewCarousel from "./CardPreviewCarousel";

const ProductCard = () => {
  const previewImgs = [previewImg_01, previewImg_02, previewImg_03, previewImg_04]; // static imgs

  return (
    <Card style={{ width: '18rem' }}>
      <div className="card-img-wrap">
        {/* Favorite  icon */}
        <CardPreviewCarousel imagesArray={previewImgs}></CardPreviewCarousel>
        {/* Price info */}
      </div>
      {/* Slick should be here */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* Description list */}
      </Card.Body>
    </Card>
  )
}

export default ProductCard;