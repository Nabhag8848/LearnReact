import { Link } from "react-router-dom";

export default function CartOverview() {
  return (
    <div className="bg-stone-400   uppercase p-2 text-zinc-800">
      <p className="font-semibold text-zinc-900 space-x-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
