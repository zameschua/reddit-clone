// @flow
import * as React from 'react';
import { Container } from 'reactstrap';
import Topic from '../utils/Topic';
import TopicDisplayRow from './TopicDisplayRow';

type Props = {
  topTopics: Array<Topic>,
  upvoteTopic: Function,
  downvoteTopic: Function,
};

const TopicDisplayArea = ({topTopics, upvoteTopic, downvoteTopic}: Props) => {
    return (
      <Container>
        {
          topTopics.map(topic => (
            <TopicDisplayRow
              text={topic.getText()}
              votes={topic.getVotes()}
              id={topic.getId()}
              key={topic.getId()}
              upvoteTopic={upvoteTopic}
              downvoteTopic={downvoteTopic}
            />
          ))
        }
      </Container>
    )
}

export default TopicDisplayArea;
