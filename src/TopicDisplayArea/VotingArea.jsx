// @flow
import * as React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

type Props = {
};

const VotingArea = (props: Props) => {
    return (
      <Container>
        <Row>
          <Button>Up</Button>
        </Row>
        <Row>
          <p>20</p>
        </Row>
        <Row>
          <Button>Down</Button>
        </Row>
      </Container>
    )
}

export default VotingArea;
