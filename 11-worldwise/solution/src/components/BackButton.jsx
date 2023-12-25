import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton({ value = -1 }) {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(value);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
