import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Catalog } from "../pages/Catalog";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
