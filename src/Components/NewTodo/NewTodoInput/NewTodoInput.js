import React from 'react'

const newTodoInput = (props) => (
  <input type="text" placeholder="Enter a todo" onChange={props.changed} onKeyUp={props.enter} value={props.todoValue}/>
)

export default newTodoInput