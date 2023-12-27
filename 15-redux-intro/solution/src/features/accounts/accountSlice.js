const initialStateAccount = {
  balance: 0,
  loan: 0,
  purpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit": {
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    }
    case "account/withdraw": {
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    }
    case "account/requestLoan": {
      const { amount, purpose } = action.payload;

      return {
        ...state,
        loan: amount,
        balance: state.balance + amount,
        purpose,
      };
    }

    case "account/payLoan": {
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        purpose: "",
      };
    }

    default: {
      return state;
    }
  }
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}
