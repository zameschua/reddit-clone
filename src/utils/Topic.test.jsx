import Topic from './Topic';

const STUB_TEXT: string = "This is a stub text";
const STUB_ID: number = 0;

test('Topic#getText() returns the text of a Topic', () => {
  const stubTopic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(stubTopic.getText()).toEqual(STUB_TEXT);
});

test('Topic#getId() returns the text of a Topic', () => {
  const stubTopic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(stubTopic.getId()).toEqual(STUB_ID);
});

test('Topic initialises with 0 votes', () => {
  const stubTopic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(stubTopic.getVotes()).toEqual(0);
});

test('Topic#upvote() increases the votes on a topic by 1', () => {
  const stubTopic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(stubTopic.getVotes()).toEqual(0);
  stubTopic.upvote();
  expect(stubTopic.getVotes()).toEqual(1);
  stubTopic.upvote();
  expect(stubTopic.getVotes()).toEqual(2);
});

test('Topic#downvote() decreases the votes on a topic by 1', () => {
  const stubTopic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(stubTopic.getVotes()).toEqual(0);
  stubTopic.downvote();
  expect(stubTopic.getVotes()).toEqual(-1);
  stubTopic.downvote();
  expect(stubTopic.getVotes()).toEqual(-2);
});
