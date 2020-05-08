import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import Todos from './Containers/Todos/Todos'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Todos />
        </Layout>
      </div>
    );
  }
}

export default App;
