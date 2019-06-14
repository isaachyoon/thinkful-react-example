import React from 'react';
import './Input.css';

function Input(props) {
  console.log('5', props.cb)
  return (
    <div>
      <input placeholder="search here" onChange={(e) => props.cb(e.target.value)}></input>
    </div>
  )
}

export default Input;