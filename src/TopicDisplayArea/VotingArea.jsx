// @flow
import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

type Props = {
  votes: number,
  id: number,
  upvoteTopic: Function,
  downvoteTopic: Function,
};

const VotingArea = ({votes, id, upvoteTopic, downvoteTopic}: Props) => {
    return (
      <Container>
        <Row>
          <Col>
            <Button>Up</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{votes}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Down</Button>
          </Col>
        </Row>
      </Container>
    )
}

export default VotingArea;
