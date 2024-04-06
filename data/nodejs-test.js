const quizData = {
  title: "Node.js Concepts Quiz",
};

const questions = [
  {
    text: "What is the purpose of the 'require' function in Node.js?",
    type: "mc",
    answers: [
        { text: "To define custom event listeners.", correct: false },
        {
          text: "To include external modules into the current application.",
          correct: true,
      },
      { text: "To handle HTTP requests.", correct: false },
      { text: "To execute asynchronous tasks.", correct: false },
    ],
  },
  {
    text: "Which of the following modules in Node.js is commonly used for handling file I/O operations?",
    type: "mc",
    answers: [
      { text: "http", correct: false },
      { text: "path", correct: false },
      { text: "fs", correct: true },
      { text: "events", correct: false },
    ],
  },
  {
    text: "What does the 'eventEmitter.emit()' method do in Node.js?",
    type: "mc",
    answers: [
        { text: "Registers a new event listener.", correct: false },
        { text: "Stops the event loop.", correct: false },
        {
          text: "Triggers the execution of event listeners for a specific event.",
          correct: true,
        },
      { text: "Sends an HTTP response.", correct: false },
    ],
  },
  {
    text: "In Node.js, what is the purpose of the 'Buffer' class?",
    type: "mc",
    answers: [
      { text: "To handle binary data.", correct: true },
      { text: "To manage asynchronous operations.", correct: false },
      { text: "To define routing for web applications.", correct: false },
      { text: "To manipulate arrays and objects.", correct: false },
    ],
  },
  {
    text: "Which of the following best describes the role of the 'setTimeout()' function in Node.js?",
    type: "mc",
    answers: [
      {
        text: "Executes a callback function after a specified delay.",
        correct: true,
      },
      { text: "Handles database queries.", correct: false },
      { text: "Creates a new child process.", correct: false },
      { text: "Sends an HTTP request.", correct: false },
    ],
  },
  {
    text: "What is the purpose of the 'process' global object in Node.js?",
    type: "mc",
    answers: [
        { text: "Manipulates DOM elements in the browser.", correct: false },
        {
          text: "Provides information about the current Node.js process.",
          correct: true,
        },
      { text: "Defines routes for Express.js applications.", correct: false },
      { text: "Manages CSS stylesheets.", correct: false },
    ],
  },
  {
    text: "Which of the following best describes the purpose of the 'path' module in Node.js?",
    type: "mc",
    answers: [
        { text: "Handles HTTP requests and responses.", correct: false },
        {
            text: "Defines middleware for Express.js applications.",
            correct: false,
        },
        {
          text: "Provides utilities for working with file and directory paths.",
          correct: true,
        },
      { text: "Generates random numbers.", correct: false },
    ],
  },
  {
    text: "What does the 'process.argv' property in Node.js represent?",
    type: "mc",
    answers: [
      {
        text: "An array containing command-line arguments passed to the Node.js process.",
        correct: true,
      },
      { text: "A method for parsing JSON data.", correct: false },
      { text: "A module for handling HTTP requests.", correct: false },
      { text: "A function for sorting arrays.", correct: false },
    ],
  },
  {
    text: "Which of the following is NOT a core module in Node.js?",
    type: "mc",
    answers: [
      { text: "express", correct: true },
      { text: "http", correct: false },
      { text: "fs", correct: false },
      { text: "path", correct: false },
    ],
  },
  {
    text: "What is the purpose of the 'npm' command in Node.js?",
    type: "mc",
    answers: [
      {
        text: "To manage packages and dependencies for Node.js projects.",
        correct: true,
      },
      { text: "To define routes for Express.js applications.", correct: false },
      { text: "To handle file I/O operations.", correct: false },
      { text: "To create event listeners.", correct: false },
    ],
  },
];

const exportedData = { quizData, questions };
module.exports= exportedData;
