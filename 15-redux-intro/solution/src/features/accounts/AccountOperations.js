import { useState } from "react";
import { validateInput } from "../../helpers/validateInput";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  const dispatch = useDispatch();
  const { balance, loan } = useSelector((store) => store.account);

  function handleDeposit() {
    dispatch(deposit(depositAmount));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(validateInput(e.target.value))}
            min={1}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={depositAmount === ""}>
            Deposit
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(validateInput(e.target.value))}
            min={1}
          />
          <button
            onClick={handleWithdrawal}
            disabled={withdrawalAmount === "" || balance < withdrawalAmount}
          >
            Withdraw
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(validateInput(e.target.value))}
            placeholder="Loan amount"
            min={1}
            disabled={loan !== 0}
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            disabled={loan !== 0}
          />
          <button
            onClick={handleRequestLoan}
            disabled={loan !== 0 || (loanAmount === "" || loanPurpose === "")}
          >
            Request loan
          </button>
        </div>
        {loan !== 0 && (
          <div>
            <span>Pay back ${loan} &nbsp;</span>
            <button onClick={handlePayLoan} disabled={balance < loan}>
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
