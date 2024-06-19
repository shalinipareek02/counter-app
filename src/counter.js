import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(27);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(27);
  };

  return (
    <div className="counter-container">
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
