import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

export const router = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/about',
        element: <AboutPage/>
    },
];