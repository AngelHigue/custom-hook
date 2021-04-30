import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter((s) => s + 1);
  };

  const decrement = () => {
    setCounter((s) => s - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    reset,
    increment,
    decrement,
  };
};
