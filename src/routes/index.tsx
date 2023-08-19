import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const router = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/women',
    element: <ProductsPage/>
  },
  {
    path: '/man',
    element: <ProductsPage/>
  },
  {
    path: '/kids',
    element: <ProductsPage/>
  },
];