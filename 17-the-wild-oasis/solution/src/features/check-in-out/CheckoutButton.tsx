import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckout } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      disabled={isCheckout}
      onClick={() => checkOut(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
