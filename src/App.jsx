import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/ecommerce-frontend-react" element={<Home />} />
      <Route path="/ecommerce-frontend-react/product" element={<Product />} />
      <Route path="/ecommerce-frontend-react/productlist" element={<ProductList />} />
      <Route path="/ecommerce-frontend-react/login" element={<Login />} />
      <Route path="/ecommerce-frontend-react/register" element={<Register />} />
      <Route path="/ecommerce-frontend-react/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
