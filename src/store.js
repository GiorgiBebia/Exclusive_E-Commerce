import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./ui/Pages/SignUp/UserSlice";
import WishlistSlice from "./ui/Pages/Wishlist/WishlistSlice";
import cartSlice from "./ui/Pages/Cart/cartSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    wishlist: WishlistSlice,
    cart: cartSlice,
  },
});

export default store;
