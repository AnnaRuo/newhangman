import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import guessAction from '../actions/guess'

class GuessInput extends PureComponent {
  state = {value: ''}

  onIputChange(event) {
    if (event.key === 'Enter') {
      this.props.guess(event.target.value)

        return this.setState ({
          value: ''
      })
    }
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div className="GuessInput">
        <label htmlFor="guess"> Type one or more characters to guess the word above</label>
      <div className="control">
        <input
          id="guess"
          type="text"
          name="guess"
          value={this.state.value}
          onKeyUp={this.onIputChange.bind(this)}
          onChange={this.onIputChange.bind(this)}
          placeholder="Type your guess..."
          autoFocus
          />
        </div>
      </div>
    )
  }
}

export default connect(null, { guess: guessAction })(GuessInput)
