import { useReducer } from "react";

function reducer(state, action) {
  const { count, step } = state;
  switch (action.type) {
    case "inc": {
      return { count: count + step, step };
    }
    case "dec": {
      return { count: count - step, step };
    }
    case "reset": {
      return { count: 0, step: 1 };
    }
    case "step": {
      return { count, step: action.payload };
    }

    default: {
      return { count: action.payload, step };
    }
  }
}

export default function DateCounter() {
  const [{ count, step }, dispatch] = useReducer(reducer, {
    count: 0,
    step: 1,
  });

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "step", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
