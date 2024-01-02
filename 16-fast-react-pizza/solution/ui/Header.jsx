import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-around border-b-2 border-zinc-400 bg-stone-300 px-4 py-3 uppercase sm:pr-28">
      <Link to="/" className="text-2xl tracking-widest">
        La Minoz Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
