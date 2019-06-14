import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <header>Name: {props.name}</header>
      <p>Age: {parseInt(props.age) + 1}</p>
    </div>
  )
}

Card.defaultProps = {
  name: "Sandy",
  age: 0
}

export default Card;