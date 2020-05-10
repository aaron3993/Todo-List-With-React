import React from 'react'
import classes from './NewTodoButton.module.css'

const newTodoButton = (props) => (
  <button className={classes.NewTodoButton} onClick={props.clicked} onKeyUp={props.enter}>Add Todo</button>
)

export default newTodoButton