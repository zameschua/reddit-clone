// @flow
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

type Props = {
  createTopic: Function,
};

type State = {
  topicText: string,
}

class TopicSubmissionArea extends Component<Props, State> {
  handleChange: Function;
  handleSubmit: Function;
  state = {
    topicText: "",
  }

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: SyntheticInputEvent<HTMLTextAreaElement>) {
    this.setState({
      topicText: event.target.value,
    });
  }

  handleSubmit() {
    this.props.createTopic(this.state.topicText);
    // Clear the textarea and state
    this.setState({
      topicText: "",
    });
  }

  render() {
    return <Form>
      <FormGroup>
        <Label for="textArea">Text Area</Label>
        <Input
          type="textarea"
          onChange={this.handleChange}
          value={this.state.topicText}
        />
      </FormGroup>
      <Button onClick={this.handleSubmit}>Submit</Button>
    </Form>
  }
}

export default TopicSubmissionArea;
