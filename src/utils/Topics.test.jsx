import Topic from './Topic';
import Topics from './Topics';

const STUB_TEXT: string = "This is a stub text";
const STUB_ID: number = 0;
const STUB_TOPIC: Topic = new Topic(STUB_TEXT, STUB_ID);

test('Topics initialises without any topics', () => {
  const topics: Topics = new Topics();
  const topicArray: Array<Topic> = topics.getTopics();

  expect(topicArray.length).toEqual(0);
});

test('Topics#createTopic(text) creates a single topic', () => {
  const topics: Topics = new Topics();
  topics.createTopic(STUB_TEXT);
  const topicArray: Array<Topic> = topics.getTopics();

  expect(topicArray[0]).toEqual(STUB_TOPIC);
});

test('Topics#upvoteTopic(id) correctly increases the vote count of the topic', () => {
  const topics: Topics = new Topics();
  topics.createTopic(STUB_TEXT);

  // Obtain the id of the topic
  const topicArray: Array<Topic> = topics.getTopics();
  const topicId = topicArray[0].getId();

  topics.upvoteTopic(topicId);
  expect(topicArray[0].getVotes()).toEqual(1);
});

// The most upvoted topics should be at the front of the array
test('Topics#upvoteTopic(id) correctly rearranges the positions of topic', () => {
  const topics: Topics = new Topics();

  // Insert 2 topics into Topics
  topics.createTopic(STUB_TEXT);
  topics.createTopic(STUB_TEXT);

  // Obtain the id of both topics topic
  const topicArray: Array<Topic> = topics.getTopics();
  const firstTopic = topicArray[0];
  const firstTopicId = firstTopic.getId();
  const secondTopic = topicArray[1];
  const secondTopicId = secondTopic.getId();

  // Upvote the second topic and expect it to shift to the front of the array
  topics.upvoteTopic(secondTopicId);
  const topicArray2: Array<Topic> = topics.getTopics();
  expect(topicArray2[0]).toEqual(secondTopic);

  // Now upvote the first topic twice and expect it to shift to the front of the array
  topics.upvoteTopic(firstTopicId);
  topics.upvoteTopic(firstTopicId);
  const topicArray3: Array<Topic> = topics.getTopics();
  expect(topicArray3[0]).toEqual(firstTopic);
});

test('Topics#downvoteTopic(id) correctly decreases the vote count of the topic', () => {
  const topics: Topics = new Topics();
  topics.createTopic(STUB_TEXT);

  // Obtain the id of the topic
  const topicArray: Array<Topic> = topics.getTopics();
  const topicId = topicArray[0].getId();

  topics.downvoteTopic(topicId);
  expect(topicArray[0].getVotes()).toEqual(-1);
});

// The most upvoted topics should be at the front of the array
test('Topics#upvoteTopic(id) correctly rearranges the positions of topic', () => {
  const topics: Topics = new Topics();

  // Insert 2 topics into Topics
  topics.createTopic(STUB_TEXT);
  topics.createTopic(STUB_TEXT);

  // Obtain the id of both topics topic
  const topicArray: Array<Topic> = topics.getTopics();
  const firstTopic = topicArray[0];
  const firstTopicId = firstTopic.getId();
  const secondTopic = topicArray[1];
  const secondTopicId = secondTopic.getId();

  // Downvote the first topic and expect it to shift to the end of the array
  topics.downvoteTopic(firstTopicId);
  const topicArray2: Array<Topic> = topics.getTopics();
  expect(topicArray2[1]).toEqual(firstTopic);

  // Now downvote the second topic twice and expect it to shift to the end of the array
  topics.downvoteTopic(secondTopicId);
  topics.downvoteTopic(secondTopicId);
  const topicArray3: Array<Topic> = topics.getTopics();
  expect(topicArray3[1]).toEqual(secondTopic);
});

test('Topics#getTopTopics() returns all topics if there are less than 20 topics', () => {
  const topics: Topics = new Topics();
  const topicsArray = topics.getTopics();
  const topTopicsArray = topics.getTopTopics();
  expect(topicsArray).toEqual(topTopicsArray);

  for (let i = 0; i < 20; i++) {
    topics.createTopic(STUB_TEXT);
  }
  const topicsArray2 = topics.getTopics();
  const topTopicsArray2 = topics.getTopTopics();
  expect(topTopicsArray2.length).toEqual(20);
  expect(topTopicsArray2).toEqual(topicsArray2);
});

test('Topics#getTopTopics() returns the top 20 topics if there are >20 topics', () => {
  const topics: Topics = new Topics();
  topics.createTopic(STUB_TEXT);
  for (let i = 0; i < 20; i++) {
    topics.createTopic(STUB_TEXT);
    topics.upvoteTopic(i + 1); // Quick hack to upvote every topic inserted after the first one
  }
  const topicsArray = topics.getTopics();
  const topTopicsArray = topics.getTopTopics();
  expect(topTopicsArray.length).toEqual(20);
  expect(topTopicsArray).toEqual(topicsArray.splice(0, 20));
  expect(topTopicsArray[19].getVotes()).toEqual(1); // Topic with 0 votes is not returned in topTopicsArray
});
