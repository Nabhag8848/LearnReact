import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

export default function CartOverview() {
  const cart = useSelector((store) => store.cart.cart);
  const totalPrice = getTotalCartPrice(cart);
  const totalPizzas = getTotalCartQuantity(cart);

  if (totalPizzas === 0) return null;

  return (
    <div className="flex items-center justify-between  bg-stone-400 px-2 py-2 text-sm uppercase text-zinc-800 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-zinc-900 sm:space-x-6">
        <span>{`${totalPizzas} pizzas`}</span>
        <span>{`${formatCurrency(totalPrice)}`}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
