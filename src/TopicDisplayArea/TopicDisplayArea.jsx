// @flow
import * as React from 'react';
import { Container } from 'reactstrap';
import TopicDisplayRow from './TopicDisplayRow';

type Props = {
};

const TopicDisplayArea = (props: Props) => {
    return (
      <Container>
        <TopicDisplayRow />
        <TopicDisplayRow />
      </Container>
    )
}

export default TopicDisplayArea;
