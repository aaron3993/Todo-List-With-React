import React from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'

const todosList = (props) => (
  <Aux>
    <ul>{props.todo}</ul>
  </Aux>
)

export default todosList