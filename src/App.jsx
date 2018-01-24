// @flow
import React, { Component } from 'react';
import TopicSubmissionArea from './TopicSubmissionArea';
import TopicDisplayArea from './TopicDisplayArea/TopicDisplayArea';
import { Container } from 'reactstrap';
import './App.css';

type Props = {
};

class App extends Component<Props> {
  render() {
    return (
      <Container>
        <TopicDisplayArea />
        <TopicSubmissionArea />
      </Container>
    );
  }
}

export default App;
