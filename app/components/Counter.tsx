'use client';

import { useState } from 'react';

// Props this component receives from its parent page
type CounterProps = {
  title: string;
  start: number;
};

export default function Counter({ title, start }: CounterProps) {
  // State: the current count (starts at the number passed in as a prop)
  const [count, setCount] = useState(start);

  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="count">{count}</p>

      {/* Event handlers: each button click updates the state */}
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
      <button className="secondary" onClick={() => setCount(start)}>
        Reset
      </button>

      {/* Conditional rendering: the message depends on the count */}
      {count < 0 && <p className="error">The count is negative.</p>}
      {count === 0 && <p className="info">The count is zero.</p>}
      {count > 0 && count < 10 && <p className="success">The count is positive.</p>}
      {count >= 10 && <p className="success">You reached 10 or more!</p>}
    </div>
  );
}