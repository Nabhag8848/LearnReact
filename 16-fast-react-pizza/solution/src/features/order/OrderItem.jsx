import { formatCurrency } from "../../utils/helpers";

export default function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold text-zinc-600">
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <span className="text-sm capitalize italic text-zinc-500">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </span>
    </li>
  );
}
