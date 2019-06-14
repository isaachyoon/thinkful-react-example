import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import Card from './components/Card/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  static get defaultProps() {
    return {

    }
  }


  logSearchString(str) {
    this.setState({str})
  }

  render() {
    const peopleData = [
      {name: 'Isaac', age: 25},
      {name: 'David', age: 100},
      {name: 'Jun', age: 25},
      {name: 'Lance', age: 23},
    ]

    const people = peopleData.map((person) => <Card name={this.state.str} age={person.age}></Card>)
    return (
      <div className="App">
        <Input cb={this.logSearchString.bind(this)}></Input>
        <div className="card-container">
          {people}
        </div>
      </div>
    );
  }
}

export default App;
