import { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  const incrementByRef = useRef(incrementBy);

  useEffect(() => {
    incrementByRef.current = incrementBy;
  }, [incrementBy]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + incrementByRef.current);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function sum() {
    setCount(count + 1);
  }

  function increment() {
    setIncrementBy(prevIncrementBy => prevIncrementBy + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={sum}>Click me</button>
      <button onClick={increment}> 🥭{incrementBy}</button>
    </div>
  );
};
