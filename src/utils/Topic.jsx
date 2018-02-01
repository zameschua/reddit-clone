// @flow
export default class Topic {
  text: string;
  votes: number;
  id: number;

  constructor(text: string, id: number) {
    this.text = text;
    this.votes = 0;
    this.id = id;
  }

  getText() {
    return this.text;
  }

  getId() {
    return this.id;
  }

  getVotes() {
    return this.votes;
  }

  upvote() {
    this.votes += 1;
  }

  downvote() {
    this.votes -= 1;
  }
}
