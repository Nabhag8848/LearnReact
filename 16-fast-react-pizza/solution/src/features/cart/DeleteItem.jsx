import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import { useMenuRedirect } from "../../hooks/useMenuRedirect";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartEmpty } = useMenuRedirect();

  function handleDeleteItem() {
    if (isCartEmpty) navigate("/menu");
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
