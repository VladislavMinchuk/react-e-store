import { NavLink } from "react-router-dom";

const HeaderNavigation = () => {
    const navList = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/about',
            title: 'About'
        },
    ]
    return (
        <ul>
            {navList.map(({ path, title }) => (
                <li>
                    <NavLink to={path} >{title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default HeaderNavigation;