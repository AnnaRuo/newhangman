import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrongGuesses from './components/WrongGuesses'
import RemainingGuesses from './components/RemainingGuesses'
import WordProgress from './components/WordProgress'
import GuessInput from './components/GuessInput'

class App extends Component {
  render() {
    return (
          <div className="App">
          <h1>Hangman</h1>

          <WrongGuesses />

          <RemainingGuesses />

          <GuessInput />

          <WordProgress />
        </div>
    );
  }
}

export default App;
