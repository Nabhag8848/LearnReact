import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = filterItem(state.cart, action.payload);
    },
    incItemQuantity(state, action) {
      const item = getItem(state.cart, action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQuantity(state, action) {
      const item = getItem(state.cart, action.payload);

      if (item.quantity < 2) {
        state.cart = filterItem(state.cart, action.payload);
        return;
      }

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  decItemQuantity,
  deleteItem,
  incItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getItem = (cart, payload) =>
  cart.find((item) => item.pizzaId === payload);

export const filterItem = (cart, payload) =>
  cart.filter((item) => item.pizzaId !== payload);

export const getTotalCartPrice = (cart) =>
  cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getTotalCartQuantity = (cart) =>
  cart.reduce((acc, item) => acc + item.quantity, 0);

export const getPizzaInCartQuantityById = (id, cart) =>
  cart.reduce(
    (acc, item) => (item.pizzaId === id ? acc + item.quantity : acc),
    0,
  );
