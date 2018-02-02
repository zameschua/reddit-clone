// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VotingArea from './VotingArea';

type Props = {
  text: string,
  votes: number,
  topicId: number,
  index: number,
  upvoteTopic: Function,
  downvoteTopic: Function,
};

const TopicDisplayRow = ({text, votes, topicId, index, upvoteTopic, downvoteTopic}: Props) => {
    return (
      <Container style={{backgroundColor: "#ecf0f1", padding: "10px", marginTop: "10px"}}>
        <Row>
          <Col md="2">
            <VotingArea
              votes={votes}
              topicId={topicId}
              index={index}
              upvoteTopic={upvoteTopic}
              downvoteTopic={downvoteTopic}
            />
          </Col>
          <Col md="10">
            <p>{text}</p>
          </Col>
        </Row>
      </Container>
    )
}

export default TopicDisplayRow;
