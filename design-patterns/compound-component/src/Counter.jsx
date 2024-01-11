import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

function Label({ children }) {
  return <label>{children}</label>;
}

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

Counter.Label = Label;
Counter.Decrease = Decrease;
Counter.Increase = Increase;
Counter.Count = Count;

export default Counter;
