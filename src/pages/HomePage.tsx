import { Container } from "react-bootstrap"
import MainCarouselHolder from "../blocks/MainCarouselHolder"
import SpecialProductsSection from "../blocks/SpecialProductsSection"

function HomePage() {
  return (
    <div className="home-page">
      <Container>
        <MainCarouselHolder></MainCarouselHolder>
        <SpecialProductsSection></SpecialProductsSection>
      </Container>
    </div>
  )
}

export default HomePage
