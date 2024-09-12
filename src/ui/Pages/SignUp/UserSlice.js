import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  password: "",
  createdAt: "",
  companyName: "",
  apartment: "",
  city: "",
  phoneNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: {
      prepare(firstName, email, password) {
        return {
          payload: {
            firstName,
            email,
            password,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.createdAt = action.payload.createdAt;
      },
    },
    enterUser: {
      prepare(firstName, email, password) {
        return {
          payload: {
            firstName,
            email,
            password,
          },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
    },

    updateProfile: {
      prepare(firstName, lastName, email, address) {
        return {
          payload: {
            firstName,
            lastName,
            email,
            address,
          },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.address = action.payload.address;
      },
    },
    updatePassword: {
      prepare(password) {
        return { payload: { password } };
      },
      reducer(state, action) {
        state.password = action.payload.password;
      },
    },

    updateBillingDetails: {
      prepare(
        firstName,
        lastName,
        email,
        address,
        companyName,
        apartment,
        city,
        phoneNumber
      ) {
        return {
          payload: {
            firstName,
            lastName,
            email,
            address,
            companyName,
            apartment,
            city,
            phoneNumber,
          },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.email = action.payload.email;
        state.address = action.payload.address;
        state.companyName = action.payload.companyName;
        state.apartment = action.payload.apartment;
        state.city = action.payload.city;
        state.phoneNumber = action.payload.phoneNumber;
      },
    },
  },
});

export const {
  createUser,
  updateProfile,
  updatePassword,
  enterUser,
  updateBillingDetails,
} = userSlice.actions;

export default userSlice.reducer;
