import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const addValue = Number(incrementAmount) || 0;

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'sans-serif' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2 style={{ fontSize: '3rem', margin: '20px 0' }}>{count}</h2>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={() => dispatch(decrement())}>- Decrement</button>
        <button onClick={() => dispatch(increment())}>+ Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          style={{ width: '60px', padding: '5px' }}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
      </div>
    </div>
  );
}