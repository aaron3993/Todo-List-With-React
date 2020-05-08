import React from 'react'

const newTodoInput = (props) => {
  <input type="text" placeholder="Enter a todo" onChange={props.changed} value={props.inputValue}/>
  console.log(value)
}

export default newTodoInput