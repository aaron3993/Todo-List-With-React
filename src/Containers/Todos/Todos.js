import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'

import NewTodoInput from '../../Components/NewTodo/NewTodoInput/NewTodoInput'
import NewTodoButton from '../../Components/NewTodo/NewTodoButton/NewTodoButton'
import RemoveTodo from '../../Components/RemoveTodo/RemoveTodo'
import TodoList from '../../Components/TodoList/TodoList'
import classes from '../../Components/TodoList/TodoList.module.css'

class Todos extends Component {
  state = {
    todos: [],
    value: ''
  }

  inputChangedHandler = (event) => {
    this.setState({value: event.target.value})
  }

  addTodoHandler = () => {
    let todo = this.state.todos
    todo.push(this.state.value)
    this.setState({todos: todo, value: ''})
  }

  removeTodoHandler = () => {
    let removeTodos = this.state.todos.map((key, i) => {
      this.state.todos.splice(i, 1)
    })
    this.setState({todos: removeTodos})
  }

  render () {
    let todoList = this.state.todos.map((eachTodo, i) => {
      return (
        <div className={classes.TodoList} key={eachTodo + i}>
          <TodoList todo={eachTodo}/>
          <RemoveTodo clicked={this.removeTodoHandler}/>
        </div>
      )
    })
    if (todoList.length === 0) {
      todoList = <p>Please add a todo!</p>
    }
    console.log(this.state)
    console.log(todoList)
    
  return (    
    <Aux>
      <h3>Todos List</h3>
      {todoList}
      <NewTodoInput changed={this.inputChangedHandler} todoValue={this.state.value}/>
      <NewTodoButton clicked={this.addTodoHandler}/>
    </Aux>
    )
  }
}

export default Todos