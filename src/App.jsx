import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { Routes, Route, redirect, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/ecommerce-frontend-react" element={<Home />} />
      <Route
        path="/ecommerce-frontend-react/products/:category"
        element={<ProductList />}
      />
      <Route
        path="/ecommerce-frontend-react/product/:productId"
        element={<Product />}
      />
      <Route path="/ecommerce-frontend-react/cart" element={<Cart />} />
      <Route
        path="/ecommerce-frontend-react/login"
        element={
          user ? <Navigate to="/ecommerce-frontend-react" replace /> : <Login />
        }
      />
      <Route
        path="/ecommerce-frontend-react/register"
        element={
          user ? (
            <Navigate to="/ecommerce-frontend-react" replace />
          ) : (
            <Register />
          )
        }
      />
    </Routes>
  );
};

export default App;
