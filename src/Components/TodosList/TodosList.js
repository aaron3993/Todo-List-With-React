import React from 'react'
import Aux from '../../hoc/Aux'

const todosList = (props) => (
  <Aux>
    <ul>{props.todo}</ul>
  </Aux>
)

export default todosList