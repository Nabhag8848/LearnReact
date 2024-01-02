import LinkButton from "../../ui/LinkButton";

export default function EmptyCart() {
  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}
