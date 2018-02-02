import Topic from './Topic';

const STUB_TEXT: string = "This is a stub text";
const STUB_ID: number = 0;

test('Topic#getText() returns the text of a Topic', () => {
  const topic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(topic.getText()).toEqual(STUB_TEXT);
});

test('Topic#getId() returns the text of a Topic', () => {
  const topic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(topic.getId()).toEqual(STUB_ID);
});

test('Topic initialises with 0 votes', () => {
  const topic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(topic.getVotes()).toEqual(0);
});

test('Topic#upvote() increases the votes on a topic by 1', () => {
  const topic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(topic.getVotes()).toEqual(0);
  topic.upvote();
  expect(topic.getVotes()).toEqual(1);
  topic.upvote();
  expect(topic.getVotes()).toEqual(2);
});

test('Topic#downvote() decreases the votes on a topic by 1', () => {
  const topic: Topic = new Topic(STUB_TEXT, STUB_ID);
  expect(topic.getVotes()).toEqual(0);
  topic.downvote();
  expect(topic.getVotes()).toEqual(-1);
  topic.downvote();
  expect(topic.getVotes()).toEqual(-2);
});
