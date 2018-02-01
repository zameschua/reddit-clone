// @flow
import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

type Props = {
  votes: number,
  topicId: number,
  index: number,
  upvoteTopic: Function,
  downvoteTopic: Function,
};

const VotingArea = ({votes, topicId, index, upvoteTopic, downvoteTopic}: Props) => {
    return (
      <Container>
        <Row>
          <Col md="3">
            <p>{index}.</p>
          </Col>
          <Col md="9">
            <Row>
              <Col>
                <Button onClick={() => upvoteTopic(topicId)}>Up</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{votes}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={() => downvoteTopic(topicId)}>Down</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
}

export default VotingArea;
