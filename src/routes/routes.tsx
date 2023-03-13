import { Routes, Route } from "react-router-dom";

import { Layout } from "layout";
import { Home } from "pages/home";
import { Product } from "pages/productPage";
import { Products } from "pages/productsPage";
import { NotFound } from "pages/notFound/NotFound";

const pathes = {
  home: "/",
  product: "/Electronics/:id",
  products: "/Electronics",
};

export const Routing = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path={pathes.home} element={<Home />} />
      <Route path={pathes.product} element={<Product />} />
      <Route path={pathes.products} element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
