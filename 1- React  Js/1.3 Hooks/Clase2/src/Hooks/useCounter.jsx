import { useState } from "react";

const useCounter = (value) => {
  const [count, setCount] = useState(value);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};

export default useCounter;
