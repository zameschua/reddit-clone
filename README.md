# Reddit Clone App
This project lives at https://zames-reddit-clone.herokuapp.com/

This project was made for the coding challenge for a job interview.
I took this chance to learn how to use Flow and Jest and include them in my project because I have never used these libraries before!

### Features
1. Users can submit topics (< 255 characters)
2. Users can upvote or downvote topics
3. The top 20 topics can be viewed from the home page

### Project dependencies
1. Boilerplate used: [Create React App](https://github.com/facebook/create-react-app)
2. Testing suite: [Jest](https://facebook.github.io/jest/) (Comes with Create React App)
3. Static Typing: [Flow](https://flow.org/) (Comes with Create React App)
4. Linting: [ESLint](https://eslint.org/) (Comes with Create React App)
5. UI: [Reactstrap](https://reactstrap.github.io/)

### How to build the project
1. Clone the repo to your pc
```
$ git clone https://github.com/zameschua/reddit-clone.git
```
2. Navigate into the project folder
```
> $ cd reddit-clone.git
```
3. Simply run:
```
> npm install
> npm start
```

## Key Features and their Implementation
### Underlying data structure
The data structure used to maintain the list of topics is a Array based Priority Queue, with O(1) retrieval and O(n) insertion times.
The reason why this was used is because
1. It is relatively easier to implement than other data structures such as a max heap
2. The O(1) retrieval time is important for web pages since users expect a web page to load fast

The Priority Queue is called `Topics` (under `/src/utils/`), and they maintain a list of `Topic`.
The Priority Queue comprises of
1. Array, with index 0 containing the `Topic` with the most votes
2. Hashmap, implemented using a Javascript Object. The hashmap allows us to Quickly reference a `Topic` by its id. This is important for the `upvoteTopic()` and `downvoteTopic()` callback functions.
![image](https://user-images.githubusercontent.com/18271085/35744085-6002883a-087a-11e8-981e-91b0dfca85f5.png)

### Displaying the top 20 topics
This is a relatively simpler task because the `Topic`s are already ordered from highest to lowest votes in the internal array. I simply spliced the first 20 items from the array and mapped through them to display them as React components.
