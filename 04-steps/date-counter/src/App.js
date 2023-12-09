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

  function handleDecrement() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleIncrement() {
    setStep((step) => step + 1);
  }

  return (
    <div class="main">
      <div className="buttons">
        <button onClick={handleDecrement}>Decrease</button>
        <p> Step : {step} </p>
        <button onClick={handleIncrement}>Increase</button>
      </div>
      <br />
      <ChangingView step={step} />
    </div>
  );
}

function ChangingView({ step }) {
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
        <p> Count : {count} </p>
        <button onClick={handleIncrement}>Increase</button>
      </div>
      <p>
        {count < 0
          ? `${count} days ago`
          : count === 0
          ? `Today`
          : `${count} days from now`}
      </p>
    </div>
  );
}
