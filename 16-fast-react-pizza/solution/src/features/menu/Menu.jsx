import { useLoaderData, useNavigate } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Menu() {
  const menu = useLoaderData();
  const navigate = useNavigate();
  const username = useSelector((store) => store.user.username);

  useEffect(
    function () {
      if (!username) {
        navigate("/");
      }
    },
    [username, navigate],
  );
  return (
    <ul className="divide-y divide-zinc-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
