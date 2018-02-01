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
          topTopics.map((topic, index) => (
            <TopicDisplayRow
              text={topic.getText()}
              votes={topic.getVotes()}
              topicId={topic.getId()}
              key={index}
              index={index}
              upvoteTopic={upvoteTopic}
              downvoteTopic={downvoteTopic}
            />
          ))
        }
      </Container>
    )
}

export default TopicDisplayArea;
