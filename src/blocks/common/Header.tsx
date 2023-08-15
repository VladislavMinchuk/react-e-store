import { FC } from "react";
import Logo from "../../components/Logo";
import HeaderNavigation from "../HeaderNavigation";

const Header: FC = () => {
    return (
        <header>
            <Logo logoWidth="80px"></Logo>
            <HeaderNavigation></HeaderNavigation>
          </header>
    );
}

export default Header;
