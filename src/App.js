import React, { Component } from 'react';
import './App.css';
import CoffeeList from './CoffeeList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      sentence: 'You can change this',
      name: '',
      food: ''
    }
    this.toggleButton = this.toggleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateSentence = this.updateSentence.bind(this);
  }

  toggleButton() {
    const toggle = !this.state.toggle;
    this.setState({ toggle });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  updateSentence(event) {
    event.preventDefault();
    this.setState({ sentence: `My name is ${this.state.name} and I like to eat ${this.state.food}.` })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.updateSentence}>
          <label htmlFor="name">Name: <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="What is your name?"
          />
          </label>
          <label htmlFor="food">
            Food: <input
              name="food"
              type="text"
              value={this.state.food}
              onChange={this.handleChange}
              placeholder="What food do you Like?"
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <p>{this.state.sentence}</p>
        <button onClick={this.toggleButton}>
          {JSON.stringify(this.state.toggle)}
        </button>
        <CoffeeList />
      </div>
    );
  }
}

export default App;
