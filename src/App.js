import React, { Component } from 'react';
import logo from './logo.svg';
import { Alert } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
    );
  }
}

export default App;
