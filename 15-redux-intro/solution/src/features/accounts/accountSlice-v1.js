const initialStateAccount = {
  balance: 0,
  loan: 0,
  purpose: "",
  isLoading: false,
};

const host = "api.frankfurter.app";

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit": {
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
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

    case "account/convertingCurrency": {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const rateInUsd = data.rates["USD"];
    dispatch({ type: "account/deposit", payload: rateInUsd });
  };
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
