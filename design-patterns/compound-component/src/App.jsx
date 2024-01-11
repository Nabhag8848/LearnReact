import Counter from "./Counter";
function App() {
  return (
    <center>
      <Counter>
        <div>
          <Counter.Label>Counter</Counter.Label>
        </div>
        <Counter.Decrease icon="⬇" />
        <Counter.Count />
        <Counter.Increase icon="⬆" />
      </Counter>
    </center>
  );
}

export default App;
