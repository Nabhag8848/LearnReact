const initialStateCustomer = {
  fullName: "",
  phoneNumber: null,
  createdAt: null,
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "customer/updateCustomerName": {
      return {
        ...state,
        fullName: action.payload,
      };
    }

    default:
      return state;
  }
}

export function createCustomer(fullName, phoneNumber) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      phoneNumber,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateCustomerName(fullName) {
  return {
    type: "customer/updateCustomerName",
    payload: fullName,
  };
}
