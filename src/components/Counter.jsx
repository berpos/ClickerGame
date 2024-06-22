import { useState, useEffect, useRef } from "react";
import mango from '../assets/mango.png';

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
      <h1 className="headers">{count} Mangoes</h1>
      <div onClick={sum}>
        <img src={mango} alt="logo" className="logo" />
      </div>
      <button onClick={increment}> AutoClick {incrementBy} 🥭</button>
    </div>
  );
};
