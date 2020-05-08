import React from 'react'

const newTodoButton = (props) => (
  <button onClick={props.clicked} value={props.inputValue}>Add Todo</button>
)

export default newTodoButton