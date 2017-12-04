import React, { PureComponent } from 'react'
import {connect} from 'react-redux'


const ALLOWED_FAILED_GUESSES = 6

class WrongGuessCount extends PureComponent {
  render() {
    return (
      <div className="RemainingGuesses">
        <p>{this.props.remainingAttempts}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    remainingAttempts: ALLOWED_FAILED_GUESSES - state.guesses.filter((letter) => {
      return !state.word.includes(letter)
    }).length
  }
}

export default connect(mapStateToProps)(WrongGuessCount)
