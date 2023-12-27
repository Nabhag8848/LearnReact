import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((store) => store.account);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;

// old way don't use it anymore

// function BalanceDisplay({ balance }) {
//   return <div className="balance">{formatCurrency(balance)}</div>;
// }

// function mapStateToProps(state) {
//   return {
//     balance: state.account.balance,
//   };
// }

// export default connect(mapStateToProps)(BalanceDisplay);
