import React from 'react'

const newTodoButton = (props) => (
  <button onClick={props.clicked} onKeyUp={props.enter}>Add Todo</button>
)

export default newTodoButton