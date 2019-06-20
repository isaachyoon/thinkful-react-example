import React from 'react';
import './Card.css';

function calculateAge(age) {
  //take a number and return number plus 1
  //if age is negative, 0
  // const result = age + 1;
  if (age < 0) {
    return 0;
  }
  return age + 1;
}

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

export {Card, calculateAge};