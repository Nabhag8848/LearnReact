import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  phoneNumber: null,
  createdAt: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, phoneNumber) {
        return {
          payload: {
            fullName,
            phoneNumber,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.phoneNumber = action.payload.phoneNumber;
        state.createdAt = new Date().toISOString();
      },
    },
    updateCustomerName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateCustomerName } = customerSlice.actions;

export default customerSlice.reducer;
