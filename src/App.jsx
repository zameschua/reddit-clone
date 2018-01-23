// @flow
import React, { Component } from 'react';
import TopicSubmissionArea from './TopicSubmissionArea';
import { Alert } from 'reactstrap';
import './App.css';

type Props = {
};

class App extends Component<Props> {
  render() {
    return (
      <div>
        <Alert color="primary">
          This is a primary alert — check it out!
        </Alert>
        <TopicSubmissionArea />
      </div>
    );
  }
}

export default App;
