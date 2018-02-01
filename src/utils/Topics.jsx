// @flow
import Topic from './Topic';

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
    this.topicsArray.push(new Topic(text, this.idCounter)); // Add topic to end of array
    this.topicsHashmap[this.idCounter] = this.topicsArray.length - 1;
    this.idCounter++;
    return this;
  }

  getTopTopics(): Array<Topic> {
    return this.topicsArray.slice(0, 20);
  }

  upvoteTopic(id: number): Topics {
    let topicIndex = this.topicsHashmap[id];
    const topic: Topic = this.topicsArray[topicIndex];
    topic.upvote();

    // Shift the topic up the priority queue if required
    while (topicIndex >= 1) {
      const topicVotes = topic.getVotes();
      const nextTopic: Topic = this.topicsArray[topicIndex - 1];
      const nextTopicVotes = topic.getVotes();

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
    let topicIndex = this.topicsHashmap[id];
    const topic: Topic = this.topicsArray[topicIndex];
    topic.downvote();

    // Shift the topic down the priority queue if required
    while (topicIndex < this.topicsArray.length) {
      const topicVotes = topic.getVotes();
      const nextTopic: Topic = this.topicsArray[topicIndex + 1];
      const nextTopicVotes = topic.getVotes();

      // Swap the topics positions in the array
      if (topicVotes < nextTopicVotes) {
        this.topicsArray[topicIndex] = nextTopic;
        this.topicsArray[topicIndex + 1] = topic;
        topicIndex -= 1;
      } else {
        break;
      }
    }
    return this;
  }
}