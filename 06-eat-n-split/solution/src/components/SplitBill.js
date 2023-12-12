import { useState } from "react";

export default function SplitBill({ id, friends, onSplit }) {
  const friend = friends.find((frd) => frd.id === id);

  const [expense, setExpense] = useState({
    price: "",
    my: "",
    friend: "",
    payer_friend: false,
  });

  function handlePriceInput(value) {
    let basicPrice = Number(value);

    if (isNaN(basicPrice)) return;

    if (basicPrice === 0) {
      setExpense({ ...expense, price: "", my: "", friend: "" });
      return;
    }

    setExpense({ ...expense, price: basicPrice });
  }

  function handleBothExpense(value) {
    const targetValue = Number(value);
    const basicPrice = expense.price;

    if (isNaN(basicPrice) || expense.price === "") return;

    if (isNaN(targetValue)) return;

    if (basicPrice < targetValue) return;

    setExpense({
      ...expense,
      my: targetValue,
      friend: basicPrice - targetValue,
    });
  }

  function handleSubmitExpense(e, data) {
    onSplit(e, data);
    setExpense({
      price: "",
      my: "",
      friend: "",
      payer_friend: false,
    });
  }
  return (
    <>
      {id !== "" && (
        <form className="form-split-bill">
          <h2>SPLIT A BILL WITH {friend.name}</h2>
          <label>💰 Bill value</label>
          <input
            value={expense.price}
            onChange={(e) => handlePriceInput(e.target.value)}
          ></input>
          <label>🧍‍♀️ Your expense</label>
          <input
            value={expense.my}
            onChange={(e) => {
              handleBothExpense(e.target.value);
            }}
          ></input>
          <label>👫 {friend.name}'s expense</label>
          <input disabled value={expense.friend}></input>
          <label>🤑 Who is paying the bill</label>
          <select
            onChange={(e) =>
              setExpense({
                ...expense,
                payer_friend: Boolean(e.target.value),
              })
            }
          >
            <option value={false}>You</option>
            <option value={true}>{friend.name}</option>
          </select>
          <button
            className="button"
            onClick={(e) =>
              handleSubmitExpense(e, {
                id,
                ...expense,
                name: friend.name,
                image: friend.image,
              })
            }
          >
            Split Bill
          </button>
        </form>
      )}
    </>
  );
}
