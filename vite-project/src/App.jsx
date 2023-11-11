import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // first value is always the current state, 2nd value is the function that allows you to update the current state

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={decrementCount}> -</button>
      <span> {count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
