import { HashRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import SignUp from "./ui/Pages/SignUp/SignUp";
import LogIn from "./ui/Pages/LogIn/LogIn";
import About from "./ui/Pages/About/About";
import Contact from "./ui/Pages/Contact/Contact";
import NotFound from "./ui/Pages/NotFound/NotFound";
import Wishlist from "./ui/Pages/Wishlist/Wishlist";
import Cart from "./ui/Pages/Cart/Cart";
import Checkout from "./ui/Pages/Cart/Checkout/Checkout";
import Account from "./ui/Pages/Account/Account";
import OrderConfirmation from "./ui/Pages/OrderConfirmation/OrderConfirmation";
import ProductDetail from "./ui/Pages/Product/ProductDetail";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/product/:name" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
