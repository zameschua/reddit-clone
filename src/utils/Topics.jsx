// @flow
import Topic from './Topic';

/**
Data structure to store several `Topic` in a priority queue
The internal structure is implemented with an array,
and a hashmap to reference array items

`Topics` was implemented as such to allow O(1) topic retrieval

The `Topic` with the most votes will be at index 0 of the array
*/
export default class Topics {
  topicsArray: Array<Topic>;
  topicsHashmap: {};
  votes: number;
  idCounter: number;

  constructor() {
    this.topicsArray = [];
    this.topicsHashmap = {};
    this.votes = 0;
    this.idCounter = 0;
  }

  createTopic(text: string): Topics {
    const topic: Topic = new Topic(text, this.idCounter);
    this.topicsArray.push(topic); // Add topic to end of array
    let topicIndex: number = this.topicsArray.length - 1;
    this.topicsHashmap[this.idCounter] = topicIndex; // Add topic to hashmap
    this.idCounter++;

    // Iteratively shift the topic up the priority queue if required
    // Takes care of the case when there are negative-voted topics upon insertion
    while (topicIndex >= 1) {
      const topicVotes = topic.getVotes();
      const nextTopic: Topic = this.topicsArray[topicIndex - 1];
      const nextTopicVotes = nextTopic.getVotes();

      // Swap the topics positions in the array and hashmap
      if (topicVotes > nextTopicVotes) {
        // Swap the topics positions in the array
        this.topicsArray[topicIndex] = nextTopic;
        this.topicsArray[topicIndex - 1] = topic;
        // Swap their values in the Hashmap
        this.topicsHashmap[topic.getId()] -= 1;
        this.topicsHashmap[nextTopic.getId()] += 1;
        topicIndex -= 1;
      } else {
        break;
      }
    }

    return this;
  }

  getTopics(): Array<Topic> {
    return this.topicsArray;
  }

  getTopTopics(): Array<Topic> {
    return this.topicsArray.slice(0, 20);
  }

  upvoteTopic(id: number): Topics {
    let topicIndex: number = this.topicsHashmap[id];
    const topic: Topic = this.topicsArray[topicIndex];
    topic.upvote();

    // Iteratively shift the topic up the priority queue if required
    while (topicIndex >= 1) {
      const topicVotes = topic.getVotes();
      const nextTopic: Topic = this.topicsArray[topicIndex - 1];
      const nextTopicVotes = nextTopic.getVotes();

      // Swap the topics positions in the array and hashmap
      if (topicVotes > nextTopicVotes) {
        // Swap the topics positions in the array
        this.topicsArray[topicIndex] = nextTopic;
        this.topicsArray[topicIndex - 1] = topic;
        // Swap their values in the Hashmap
        this.topicsHashmap[topic.getId()] -= 1;
        this.topicsHashmap[nextTopic.getId()] += 1;
        topicIndex -= 1;
      } else {
        break;
      }
    }
    return this;
  }

  downvoteTopic(id: number): Topics {
    let topicIndex: number = this.topicsHashmap[id];
    const topic: Topic = this.topicsArray[topicIndex];
    topic.downvote();

    // Iteratively shift the topic down the priority queue if required
    while (topicIndex < this.topicsArray.length - 1) {
      const topicVotes = topic.getVotes();
      const nextTopic: Topic = this.topicsArray[topicIndex + 1];
      const nextTopicVotes = nextTopic.getVotes();

      // Swap the topics positions in the array
      if (topicVotes < nextTopicVotes) {
        this.topicsArray[topicIndex] = nextTopic;
        this.topicsArray[topicIndex + 1] = topic;
        // Swap their values in the Hashmap
        this.topicsHashmap[topic.getId()] += 1;
        this.topicsHashmap[nextTopic.getId()] -= 1;
        topicIndex += 1;
      } else {
        break;
      }
    }
    return this;
  }
}
