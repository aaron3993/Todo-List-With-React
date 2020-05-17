import React from 'react'

import './TodoList.css'

const todoList = props => {
  let todoList = props.todos.map(todo => (
    <li className="todo" key={todo.id}>
      <p>{todo.text}</p>
      <button onClick={props.onRemoveTodo.bind(this, todo.id)}>X</button>
    </li>
  ))
  if (todoList.length === 0) {
    todoList = <p>Please add a todo!</p>
  }
console.log(todoList)
  return (
    <section className="todo-list">
      <h1>Todo List</h1>
      {todoList}
    </section>
  )}


export default todoList