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
          <Col>
            <Button
              color="success"
              onClick={() => upvoteTopic(topicId)}
              block
            >
              Upvote
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign: "center"}}>
            <p>{votes}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              color="danger"
              onClick={() => downvoteTopic(topicId)}
              block
            >
              Downvote
            </Button>
          </Col>
        </Row>
      </Container>
    )
}

export default VotingArea;
