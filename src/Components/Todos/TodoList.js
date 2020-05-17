import React from 'react'

import classes from './Todo.module.css'

const todoList = props => {
  let todoList = props.todos.map(todo => (
    <li className={classes.Todo} key={todo.id}>
      <p>{todo.text}</p>
      <button onClick={props.onRemoveTodo.bind(this, todo.id)}>X</button>
    </li>
  ))
  if (todoList.length === 0) {
    todoList = <p>Please add a todo!</p>
  }
console.log(todoList)
  return (
    <section>
      <h1>Todos List</h1>
      {todoList}
    </section>
  )}


export default todoList