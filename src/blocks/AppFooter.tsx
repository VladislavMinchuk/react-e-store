import { Col, Container, Row } from "react-bootstrap";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const AppFooter = () => {
  const producrsPageNav = [
    { path: '/man', title: 'Man' },
    { path: '/woman', title: 'Woman' },
    { path: '/kids', title: 'Kids' },
  ];
  const companyPageNav = [
    { path: '/about', title: 'About' },
    { path: '/contacts', title: 'Our contacts' },
    { path: '/policy', title: 'Privacy policy' },
  ];

  return (
    <footer className="app-footer border-top bg-body-tertiary py-4">
      <Container>
        <Row>
          <Col>
            <Link to="/"><Logo></Logo></Link>
          </Col>
          <Col>
            <h3 className="h5 mb-3">Main products</h3>
            <ul className="list-unstyled">
              {producrsPageNav.map(({ path, title }) => {
                return (<li className="mb-3">
                  <Link to={path} className="link-body-emphasis">{title}</Link>
                </li>);
              })}
            </ul>
          </Col>
          <Col>
            <h3 className="h5 mb-3">Main products</h3>
            <ul className="list-unstyled">
              {companyPageNav.map(({ path, title }) => {
                return (<li className="mb-3">
                  <Link to={path} className="link-body-emphasis">{title}</Link>
                </li>);
              })}
            </ul>
          </Col>
        </Row>
        <p className="">Copyrigth</p>
      </Container>
    </footer>
  )
};
export default AppFooter;
