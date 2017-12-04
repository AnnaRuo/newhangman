import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

class Wordprogress extends PureComponent {
  render() {
    return (
      <div className="WordProgress">
      <p>{this.props.progress}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    progress: state.word
    .split('')
    .map((letter) => {
      if (state.guesses.includes(letter)) {
        return letter.toUpperCase()
      }
      return '_'
    })
    .join(' ')
  }
}

export default connect(mapStateToProps) (Wordprogress)
