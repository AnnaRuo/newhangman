export default (input) => {
  return (dispatch, getState) => {
    const { word } = getState()

    dispatch({
      type: 'GUESS',
      payload: {input, word}
    })
  }
}
