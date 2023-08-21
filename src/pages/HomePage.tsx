import { Container } from "react-bootstrap"
import MainCarouselHolder from "../blocks/MainCarouselHolder"

function HomePage() {
  return (
    <div className="home-page">
      <Container>
        <MainCarouselHolder></MainCarouselHolder>
        <h2>Home</h2>
      </Container>
    </div>
  )
}

export default HomePage
