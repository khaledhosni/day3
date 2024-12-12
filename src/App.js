import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./ui/UserList";
import Home from "./ui/Home";
import Products from "./ui/Products";
import About from "./ui/About";
import Index from "./ui/login/Index";
import Filter from "./ui/util/Filter";
import Login from "./ui/login/Login";
import ProductDetails from "./ui/DataNavigation/ProductDetails";
import EditProduct from "./ui/DataNavigation/EditProduct";

function App() {
  return (
    <Router>
      <Filter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/editproducts" element={<EditProduct />} />
        </Routes>
      </Filter>
    </Router>
  );
}

export default App;
