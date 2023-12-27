import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !phoneNumber || phoneNumber.length < 10) return;
    dispatch(createCustomer(fullName, phoneNumber));
  }

  function handleSetPhoneNumber(value) {
    if (value === "" || +value < 0) return setPhoneNumber("");

    if (value.length < 11 || phoneNumber.toString().length > value.length) {
      setPhoneNumber(+value);
    }
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => handleSetPhoneNumber(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
