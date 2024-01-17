import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogoutForm() {
  const { logout, isLogout } = useLogout();

  return (
    <ButtonIcon disabled={isLogout} onClick={() => logout()}>
      {isLogout ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default LogoutForm;
