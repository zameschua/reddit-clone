// @flow
import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import VotingArea from './VotingArea';

type Props = {
};

const TopicDisplayRow = (props: Props) => {
    return (
      <Container>
        <Row>
          <Col md="1">
            <VotingArea />
          </Col>
          <Col md="10">
            <p>This is the topic</p>
          </Col>
        </Row>
      </Container>
    )
}

export default TopicDisplayRow;
