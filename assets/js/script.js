//getting all required elements

const startButton = document.querySelector('.start-btn');
const rulesBox = document.querySelector('.rules-box');
const quitButton = document.querySelector('.buttons .quit');
const continueButton = document.querySelector('.buttons .continue');
const gameBox = document.querySelector('.game-box');
const optionsBox = document.querySelector('.options-box');
const timeLeft = gameBox.querySelector('.timer .time-left');
const nextButton = document.querySelector('.next-btn');
const exitButton = document.querySelector('.quit-btn');
const resultsBox = document.querySelector('.results');
const restartButton = resultsBox.querySelector('.buttons .restart');
const returnButton = resultsBox.querySelector('.buttons .quit');
let plusOne = document.querySelector('.total-q #correct-q');
let minusOne = document.querySelector('.total-q #wrong-q');



let questionsCount = 0;
let timer;
let timeValue = 15;
let userScore = 0;
let userScoreIncorrect = 0;


// creating an array and passing the number, questions, options, and answers
let questions = [
    {      
        numb: 1,
        question: "What was the first commercially successful video game?",
        answer: "Pong",
        options: [
            "Pong",
            "Tick Tack Toe",
            "Whac-A-Mole",
            "Pinball"
      ]
    },
    {
        numb: 2,
        question: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
      ]
    },
    {
        numb: 3,
        question: "",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
      ]
    },
    {
        numb: 4,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
      {
        numb: 5,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
      {
        numb: 6,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
      {
        numb: 7,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
      {
        numb: 8,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
      {
        numb: 9,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
      {
        numb: 10,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
    {
        numb: 11,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
    {
        numb: 12,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
    {
        numb: 13,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
    {
        numb: 14,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
    {
        numb: 15,
        question: "",
        answer: "",
        options: [
          "",
          "",
          "",
          ""
        ]
    },
]
    