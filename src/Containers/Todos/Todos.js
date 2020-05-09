import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import NewTodoInput from '../../Components/NewTodo/NewTodoInput/NewTodoInput'
import NewTodoButton from '../../Components/NewTodo/NewTodoButton/NewTodoButton'
import TodosList from '../../Components/TodosList/TodosList'

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

  render () {
    const todosList = this.state.todos.map((eachTodo, i) => {
      return <TodosList todo={eachTodo} key={eachTodo + i}/>
    })
    console.log(this.state)
    console.log(todosList)
  return (    
    <Aux>
      <h3>Todos List</h3>
      {/* <TodosList inputLength={this.state.todos.length} /> */}
      {todosList}
      <NewTodoInput changed={this.inputChangedHandler}/>
      <NewTodoButton clicked={this.addTodoHandler}/>
    </Aux>
    )
  }
}

export default Todos