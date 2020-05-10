import React from 'react'
import classes from './NewTodoInput.module.css'

const newTodoInput = (props) => (
  <input className={classes.NewTodoInput} type="text" placeholder="Enter a todo" onChange={props.changed} onKeyUp={props.enter} value={props.todoValue}/>
)

export default newTodoInput