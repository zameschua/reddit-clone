// @flow
import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VotingArea from './VotingArea';

type Props = {
  text: string,
  votes: number,
  id: number,
  upvoteTopic: Function,
  downvoteTopic: Function,
};

const TopicDisplayRow = ({text, votes, id, upvoteTopic, downvoteTopic}: Props) => {
    return (
      <Container>
        <Row>
          <Col md="1">
            <VotingArea
              votes={votes}
              id={id}
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
