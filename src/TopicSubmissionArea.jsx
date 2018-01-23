// @flow
import * as React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

type Props = {
};

const TopicSubmissionArea = (props: Props) => {
    return (
      <InputGroup>
        <Input placeholder="What topic interests you today?" />
        <InputGroupAddon addonType="prepend"><Button>Submit</Button></InputGroupAddon>
      </InputGroup>
    )
}

export default TopicSubmissionArea;
