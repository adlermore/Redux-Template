import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment  } from './CounterSlice';
import {toggleDisableed } from './IsDisabledSlice';
import styles from './Counter.module.css'

export default function Counter() {
    
  const count = useSelector((state) => state.counter.value)
  const isDisabled  =  useSelector((state)=>state.isDisabled.isDisabled)
  const dispatch = useDispatch()
  console.log(isDisabled);
  return (  
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button disabled={isDisabled} onClick={()=>dispatch(toggleDisableed())}>ToggleDisabled BTN</button>
      </div>
    </div>
  )
}