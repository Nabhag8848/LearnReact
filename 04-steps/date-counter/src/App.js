import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}
function Step() {
  const [step, setStep] = useState(1);

  return (
    <div className="main">
      <div className="buttons">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <p> {step} </p>
      </div>
      <ChangingView step={step} setStep={setStep} />
    </div>
  );
}

function ChangingView({ step, setStep }) {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount((count) => count - step);
  }
  function handleIncrement() {
    setCount((count) => count + step);
  }

  return (
    <div>
      <div className="buttons">
        <button onClick={handleDecrement}>Decrease</button>
        <input
          value={count}
          onChange={(e) => {
            if (e.target.value === "") {
              setCount(0);
              return;
            }
            setCount(Number(e.target.value));
          }}
        ></input>
        <button onClick={handleIncrement}>Increase</button>
      </div>
      <p>
        {count < 0
          ? `${count} days ago`
          : count === 0
          ? `Today`
          : `${count} days from now`}
      </p>

      {(count !== 0 || step !== 1) && (
        <button
          onClick={() => {
            setCount(0);
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
