import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartState: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        state.cart = state.cart.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name !== action.payload.name
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload.name);

      item.quantity++;
      item.totalPrice = item.quantity * item.newPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.name === action.payload.name);

      item.quantity--;
      item.totalPrice = item.quantity * item.newPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  toggleCartState,
  removeCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  updateTotalPrice,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
