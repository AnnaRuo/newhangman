import React, { PureComponent } from 'react'
import {connect} from 'react-redux'


class WrongGuesses extends PureComponent {
  render() {
    console.table(this.props.wrongGuesses)

    const guesses = this.props.wrongGuesses
    .map((letter) => {
      return letter.toUpperCase()
    })
    .join(' ')

    return (
      <div className="WrongGuesses">
        <p>{guesses}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wrongGuesses: state.guesses.filter((letter) => {
      return !state.word.includes(letter)
    })
  }
}

export default connect(mapStateToProps)(WrongGuesses)
