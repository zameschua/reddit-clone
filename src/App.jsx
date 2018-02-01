// @flow
import React, { Component } from 'react';
import TopicSubmissionArea from './TopicSubmissionArea';
import TopicDisplayArea from './TopicDisplayArea/TopicDisplayArea';
import Topics from './utils/Topics';
import { Container } from 'reactstrap';
import './App.css';

type Props = {};

type State = {
  topics: Topics,
  idCount: number,
};

class App extends Component<Props, State> {
  createTopic: Function;
  upvoteTopic: Function;
  downvoteTopic: Function;

  state = {
    topics: new Topics(),
    idCount: 0,
  }

  constructor(props: Props) {
    super(props);
    this.createTopic = this.createTopic.bind(this);
    this.upvoteTopic = this.createTopic.bind(this);
    this.downvoteTopic = this.downvoteTopic.bind(this);
  }

  upvoteTopic(id: number) {
    this.setState((prevState, props) => {
      return {topics: prevState.topics.upvoteTopic(id)};
    })
  }

  downvoteTopic(id: number) {
    this.setState((prevState, props) => {
      return {topics: prevState.topics.downvoteTopic(id)};
    })
  }

  createTopic(text: string) {
    this.setState((prevState, props) => {
      return {topics: prevState.topics.createTopic(text)};
    })
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <TopicDisplayArea
          topTopics={this.state.topics.getTopTopics()}
          upvoteTopic={this.upvoteTopic}
          downvoteTopic={this.downvoteTopic}
        />
        <TopicSubmissionArea createTopic={this.createTopic} />
      </Container>
    );
  }
}

export default App;
