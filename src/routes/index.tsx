import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";

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
    element: <ProductListPage/>
  },
  {
    path: '/man',
    element: <ProductListPage/>
  },
  {
    path: '/kids',
    element: <ProductListPage/>
  },
  {
    path: '/product/:id',
    element: <ProductDetailsPage/>
  },
  {
    path: '/cart',
    element: <CartPage/>
  },
];