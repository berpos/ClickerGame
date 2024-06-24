import { useState, useEffect, useRef } from "react";
import mango from '../assets/mango.png';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  const [isAutoClickerActive, setIsAutoClickerActive] = useState(false);
  const incrementByRef = useRef(incrementBy);

  useEffect(() => {
    incrementByRef.current = incrementBy;
  }, [incrementBy]);

  useEffect(() => {
    let interval;
    if (isAutoClickerActive) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + incrementByRef.current);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAutoClickerActive]);

  function sum() {
    setCount(prevCount => prevCount + 1);
  }

  function increment() {
    setIncrementBy(prevIncrementBy => prevIncrementBy + 1);
  }

  function AutoClicker() {
    setIsAutoClickerActive(true);
  }

  return (
    <div>
      <h1 className="headers">{count} MANGOES</h1>
      <div onClick={sum}>
        <img src={mango} alt="logo" className="logo" />
      </div>
      {!isAutoClickerActive && (
        <button onClick={AutoClicker}>Auto Clicker</button>
      )}
      <button onClick={increment}> AutoClick {incrementBy} 🥭</button>
    </div>
  );
};
