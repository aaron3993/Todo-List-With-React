import React, { Component } from 'react'
import NewTodoInput from '../../Components/NewTodo/NewTodoInput/NewTodoInput'
import NewTodoButton from '../../Components/NewTodo/NewTodoButton/NewTodoButton'
import RemoveTodo from '../../Components/RemoveTodo/RemoveTodo'
import TodoList from '../../Components/TodoList/TodoList'
import TodoListClasses from '../../Components/TodoList/TodoList.module.css'
import TodoClasses from './Todos.module.css'

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

  enterKeyHandler = (event) => {
    if (event.key === 'Enter') {
      let todo = this.state.todos
      todo.push(this.state.value)
      this.setState({todos: todo, value: ''})
    }
  }

  removeTodoHandler = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({todos: this.state.todos})
    console.log(this.state.todos)
  }

  render () {
    let todoList = this.state.todos.map((eachTodo, i) => {
      return (
        <div className={TodoListClasses.TodoList} key={eachTodo + i}>
          <TodoList todo={eachTodo}/>
          <RemoveTodo clicked={() => this.removeTodoHandler()}/>
        </div>
      )
    })
    if (todoList.length === 0) {
      todoList = <p>Please add a todo!</p>
    }
    console.log(this.state)
    console.log(todoList)
    
  return (    
    <div className={TodoClasses.Todos}>
      <h1>Todos List</h1>
      {todoList}
      <NewTodoInput changed={this.inputChangedHandler} enter={this.enterKeyHandler} todoValue={this.state.value}/>
      <NewTodoButton clicked={this.addTodoHandler}/>
    </div>
    )
  }
}

export default Todos