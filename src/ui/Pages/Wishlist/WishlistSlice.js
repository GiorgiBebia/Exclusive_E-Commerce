import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedItems: [],
  watchedItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleHeartState: (state, action) => {
      const existingItem = state.likedItems.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        state.likedItems = state.likedItems.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.likedItems.push(action.payload);
      }
    },
    toggleWatchedState: (state, action) => {
      const existingItem = state.watchedItems.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        state.watchedItems = state.watchedItems.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.watchedItems.push(action.payload);
      }
    },
  },
});

export const { toggleHeartState, toggleWatchedState } = wishlistSlice.actions;

export default wishlistSlice.reducer;
