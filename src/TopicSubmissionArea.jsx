// @flow
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type Props = {
  createTopic: Function,
};

type State = {
  newTopicText: string,
}

class TopicSubmissionArea extends Component<Props, State> {
  handleChange: Function;
  handleSubmit: Function;
  state = {
    newTopicText: "",
  }

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: SyntheticInputEvent<HTMLTextAreaElement>) {
    this.setState({
      newTopicText: event.target.value,
    });
  }

  handleSubmit() {
    this.props.createTopic(this.state.newTopicText);
  }

  render() {
    return <Form>
      <FormGroup>
        <Label for="textArea">Text Area</Label>
        <Input type="textarea" onChange={this.handleChange}/>
      </FormGroup>
      <Button onClick={this.handleSubmit}>Submit</Button>
    </Form>
  }
}

export default TopicSubmissionArea;
