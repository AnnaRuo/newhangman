import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrongGuesses from './components/WrongGuesses'
import RemainingGuesses from './components/RemainingGuesses'
import WordProgress from './components/WordProgress'

class App extends Component {
  render() {
    return (
          <div className="App">
          <h1>Hangman</h1>

          <WrongGuesses />

          <RemainingGuesses />

          <div className="GuessInput">
            <label htmlFor="guess"> Type one or more characters to guess the word above</label>
          <div className="control">
            <input type="text" name="guess" placeholder="Type your guess..." />
          </div>
          </div>
          <WordProgress />
        </div>
    );
  }
}

export default App;
