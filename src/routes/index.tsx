import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

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
  {
    path: '/product/:id',
    element: <ProductDetailsPage/>
  },
];