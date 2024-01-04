import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decItemQuantity, incItemQuantity } from "./cartSlice";
import { useMenuRedirect } from "../../hooks/useMenuRedirect";
import { useNavigate } from "react-router-dom";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isTotalCartEmpty } = useMenuRedirect();

  function handleDecItemQuantity() {
    if (isTotalCartEmpty) navigate("/menu");
    dispatch(decItemQuantity(pizzaId));
  }

  function handleIncItemQuantity() {
    dispatch(incItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecItemQuantity}>
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={handleIncItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
