import React, { useState, useEffect, useReducer } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './Todos.css'

const Todo = () => {
  const [enteredTodo, setEnteredTodo] = useState([])

  useEffect(() => {
    fetch('https://todo-project-c09f5.firebaseio.com/todos.json')
    .then(response => response.json())
    .then(responseData => {
      const loadedTodos = []
      for (const key in responseData) {
        loadedTodos.push({
          id: key,
          text: responseData[key].text
        })
      }
      setEnteredTodo(loadedTodos)
    })
  }, [])

  const addTodoHandler = todo => {
    fetch('https://todo-project-c09f5.firebaseio.com/todos.json', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      return response.json()
    }).then(responseData => {
      setEnteredTodo(prevTodos => [
        ...prevTodos,
        {id: responseData.name, ...todo}
      ])
    })
  }

  const removeTodoHandler = (todoId) => {
    fetch(`https://todo-project-c09f5.firebaseio.com/todos/${todoId}.json`, {
      method: 'DELETE'
    }).then(response => {
      setEnteredTodo(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
    })
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