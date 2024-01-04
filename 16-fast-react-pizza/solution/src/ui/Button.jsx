import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base = `rounded-lg bg-red-500 font-semibold uppercase tracking-wide text-zinc-200 
  transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 
  focus:ring-offset-1 disabled:cursor-not-allowed`;
  const baseWhite = `rounded-lg border-2 border-zinc-200 font-semibold uppercase 
  tracking-wide hover:text-zinc-600 hover:border-zinc-400 transition-all duration-100
  focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-0
  disabled:cursor-not-allowed`;

  const styles = {
    primary: base + ` px-4 py-3 text-sm`,
    small: base + ` px-3 py-2 text-xs`,
    round: baseWhite + ` px-3 py-2 text-xs`,
    secondary: baseWhite + ` px-4 py-[8.5px] text-sm`,
    option: `rounded-lg border-2 border-zinc-400 font-semibold
    tracking-wide hover:text-zinc-600 hover:border-zinc-500 transition-all duration-100
    focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-1 
    disabled:cursor-not-allowed px-4 py-1 text-sm lg:mr-5`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
