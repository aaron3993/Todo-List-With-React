import React, { useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todos.css'

const Todo = () => {
  const [enteredTodo, setEnteredTodo] = useState([])

  const addTodoHandler = todo => {
    setEnteredTodo(prevTodos => [
      ...prevTodos,
      {id: Math.random().toString(), ...todo}
    ])
  }

  const removeTodoHandler = (index) => {
    setEnteredTodo(prevTodos => prevTodos.filter(todo => todo.id !== index))
  }
  console.log(enteredTodo)
  return (
    <div className="todos">
      <TodoList todos={enteredTodo} onRemoveTodo={removeTodoHandler}/>
      <TodoForm onAddTodo={addTodoHandler}/>
    </div>
  )
}

export default Todo