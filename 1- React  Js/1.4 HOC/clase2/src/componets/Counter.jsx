/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import useCounter from "../Hooks/useCounter";

const Counter = () => {
    const {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  } = useCounter(2)


useEffect(() => {
  console.log("Estas en un efecto", count)
  
}, [count])

return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDecrement }>-1</button>
    </div>
  );
};

export default Counter;
