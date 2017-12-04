import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrongGuesses from './components/WrongGuesses'


class App extends Component {
  render() {
    return (
          <div className="App">
          <h1>Hangman</h1>

          <WrongGuesses />

          <div className="RemainingGuessCount">
            <p>2</p>
          </div>

          <div className="GuessInput">
            <label htmlFor="guess"> Type one or more characters to guess the word above</label>
            <div className="control">
            <input type="text" name="guess" placeholder="Type your guess..." />
            </div>
          </div>

          <div className="WordProgress">
          <p>_ L _ _ _ </p>
          </div>


        </div>
    );
  }
}

export default App;
