import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HeaderNav.scss';

export type NavProps = {
  className: string,
  onClickLink: Function
}

const HeaderNavigation = ({ className, onClickLink }: NavProps) => {
  const navList = [
    {
      path: '/man',
      title: 'Man'
    },
    {
      path: '/women',
      title: 'Women'
    },
    {
      path: '/kids',
      title: 'Kids'
    },
  ]

  return (
    <Nav className={className}>
      {navList.map(({ path, title }, idx) => (
        <Nav.Item key={idx} className="nav-link-item mx-md-2 mb-1">
          <Link
            to={path}
            className="d-block d-md-inline link-body-emphasis text-center py-2 py-md-0"
            onClick={() => onClickLink()}
          >
            {title}
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default HeaderNavigation;