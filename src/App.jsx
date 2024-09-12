import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const SignUp = lazy(() => import("./ui/Pages/SignUp/SignUp"));
const LogIn = lazy(() => import("./ui/Pages/LogIn/LogIn"));
const About = lazy(() => import("./ui/Pages/About/About"));
const Contact = lazy(() => import("./ui/Pages/Contact/Contact"));
const NotFound = lazy(() => import("./ui/Pages/NotFound/NotFound"));
const Wishlist = lazy(() => import("./ui/Pages/Wishlist/Wishlist"));
const Cart = lazy(() => import("./ui/Pages/Cart/Cart"));
const Checkout = lazy(() => import("./ui/Pages/Cart/Checkout/Checkout"));
const Account = lazy(() => import("./ui/Pages/Account/Account"));
const OrderConfirmation = lazy(() =>
  import("./ui/Pages/OrderConfirmation/OrderConfirmation")
);
const ProductDetail = lazy(() => import("./ui/Pages/Product/ProductDetail"));

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
