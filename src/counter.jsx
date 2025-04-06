import { useState } from "react";

export default function Counter() {
  const CounterStyle = {
    border: "2px solid red",
    borderRadius: "8px",
  };

  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newValue = count + 1;
    setCount(newValue);
  };

  return (
    <div style={CounterStyle}>
      <h1>Count: {count} </h1>
      <button onClick={handleAdd}>Add {count} Times</button>
    </div>
  );
}
