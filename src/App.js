import React, { Component } from 'react';
import Todos from './Containers/Todos/Todos'
import classes from './App.module.css';


class App extends Component {
  render() {
    return (
      <main className={classes.App}>
          <Todos />
      </main>
    );
  }
}

export default App;
