import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import HeaderNav from "../components/HeaderNav";
import HeaderUserBlock from "../components/HeaderUserBlock";
import { Container, Navbar } from "react-bootstrap";

const AppHeader: FC = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const closeNavBar = () => {
    setNavExpanded(false);
  };

  return (
    <header className="shadow-sm">
      <Navbar
        expand="md"
        className="bg-body-tertiary"
        expanded={navExpanded}
        onToggle={(expanded) => setNavExpanded(expanded)}
      >
        <Container>
          <Link to='/'>
            <Logo logoWidth="60px"></Logo>
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <HeaderNav
              className="mx-md-auto"
              onClickLink={closeNavBar}
            ></HeaderNav>
            <HeaderUserBlock
              onClickLink={closeNavBar}
            ></HeaderUserBlock>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppHeader;
