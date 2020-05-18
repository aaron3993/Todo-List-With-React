import React, {useState } from 'react'

import './TodoForm.css'

const TodoForm = props => {
  const [enteredTodoText, setEnteredTodoText] = useState('')

  const addTodoButton = () => {
    props.onAddTodo({text: enteredTodoText})
  }
  
  const enterTodoHandler = (event) => {
    if (event.key === 'Enter') {
    props.onAddTodo({text: enteredTodoText})
    }
  }

  return (    
    <section className="todo-form">
      <input
        className="todo-input"
        type="text"
        id="text"
        value={enteredTodoText}
        onChange={event => {
          setEnteredTodoText(event.target.value)
        }}
        onKeyUp={enterTodoHandler}
      />
      <button
        className="todo-button"
        onClick={addTodoButton}>
        Add Todo
      </button>
    </section>
  )
}

export default TodoForm