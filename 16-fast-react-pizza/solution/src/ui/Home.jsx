import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

export default function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="mb-14 mt-36 text-center sm:mb-28 sm:mt-40">
      {username && (
        <Button type="option" to="/menu">
          Continue Ordering
        </Button>
      )}
      <h1
        className={`mb-10 text-center font-sans text-5xl font-semibold text-red-500
      md:text-6xl ${username && "mt-6"} `}
      >
        La Minoz 🍕
        <br />
        Fresh out of the Oven, Straight to You!
      </h1>
      {!username && <CreateUser />}
    </div>
  );
}
