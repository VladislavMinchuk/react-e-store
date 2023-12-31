import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../store";

export type UserBlockProps = {
  onClickLink?: Function;
};

const HeaderUserBlock = ({ onClickLink }: UserBlockProps) => {
  const cartProducts = useTypedSelector((state) => state.cartSlice.userCart?.products) || [];
  return (
    <div className="d-inline-block">
      <Dropdown>
        {cartProducts.length > 0 && (
          <span className="bg-warning text-white px-2 rounded-circle">{cartProducts.length}</span>
        )}
        <Dropdown.Toggle variant="link" className="text-secondary">
          <FontAwesomeSvgIcon icon={faUser} />
        </Dropdown.Toggle>

        <DropdownMenu align={{ md: "end" }}>
          <Dropdown.Item as="span" disabled>
            User name
          </Dropdown.Item>
          <Link to="/cart" onClick={onClickLink && (() => onClickLink())} className="link-body-emphasis mx-3">
            Cart
          </Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default HeaderUserBlock;
