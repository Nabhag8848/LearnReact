import { Link } from "react-router-dom";

export default function CartOverview() {
  return (
    <div className="flex items-center justify-between  bg-stone-400 px-2 py-2 text-sm uppercase text-zinc-800 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-zinc-900 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
