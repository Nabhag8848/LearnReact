import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

export function useMenuRedirect() {
  const { pathname } = useLocation();
  const cart = useSelector((store) => store.cart.cart);
  const isCartEmpty = cart.length < 2 && pathname === "/cart";
  const isTotalCartEmpty =
    getTotalCartQuantity(cart) === 1 && pathname === "/cart";
  return { isCartEmpty, isTotalCartEmpty };
}
