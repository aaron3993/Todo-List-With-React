import React from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'

const todoList = (props) => (
  <Aux>
    <ul>{props.todo}</ul>
  </Aux>
)

export default todoList