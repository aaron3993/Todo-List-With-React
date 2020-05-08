import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import NewTodoInput from '../../Components/NewTodo/NewTodoInput/NewTodoInput'
import NewTodoButton from '../../Components/NewTodo/NewTodoButton/NewTodoButton'
import TodosList from '../../Components/TodosList/TodosList'

class Todos extends Component {
  state = {
    todos: '',
    added: false
  }

  // inputChangeHandler = (event) => {
  //   this.setState({todos: event.target.value})
  //   console.log(event.target.value)
  // }

  addTodoHandler = (event) => {
    console.log(this.state)
    this.setState({todos: event.target.value})
    console.log(this.state)
  }

  render () {
    const todoList = this.state.todos.split('').map(eachTodo => {
      return <TodosList todo={eachTodo} />
    })

  return (
    <Aux>
      <h3>Todos List</h3>
      <TodosList inputLength={this.state.todos.length} />
      {todoList}
      <NewTodoInput changed={() => this.inputChangeHandler}/>
      <NewTodoButton clicked={() => this.addTodoHandler} inputValue={this.state.todos}/>
    </Aux>
  )
  }
}

export default Todos