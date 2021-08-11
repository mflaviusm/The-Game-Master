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
        question: "What is the best selling videogame of all time?",
        answer: "Minecraft",
        options: [
            "Super Mario Bros.",
            "Minecraft",
            "Grand Theft Auto V",
            "Pac-Man"
      ]
    },
    {
        numb: 3,
        question: "Blizzard Entertainment is most well known for what video game franchise?",
        answer: "World of Warcraft",
        options: [
            "Diablo Series",
            "Overwatch",
            "Heartstone",
            "World of Warcraft"
      ]
    },
    {
        numb: 4,
        question: "What year was the first virtual reality headset created?",
        answer: "1995",
        options: [
          "1987",
          "1995",
          "2001",
          "2008"
        ]
    },
      {
        numb: 5,
        question: "What popular video game character inspired the name of a human gene?",
        answer: "Sonic the Hedgehog",
        options: [
          "Sonic the Hedgehog",
          "Lara Croft",
          "Ezio Auditore",
          "Luigi"
        ]
    },
      {
        numb: 6,
        question: "What time period was L.A. Noire modeled after?",
        answer: "1940s Los Angeles",
        options: [
          "1920s London",
          "1960s New York",
          "1950s Dublin",
          "1940s Los Angeles"
        ]
    },
      {
        numb: 7,
        question: "What popular streaming service launched in June 2011, allows content creators to stream video games while chatting with viewers?",
        answer: "Twitch",
        options: [
          "YouTube Live",
          "Twitch",
          "Facebook Gaming",
          "Mixer"
        ]
    },
      {
        numb: 8,
        question: "What football player appeared most on the EA FIFA Game cover?",
        answer: "Wayne Rooney",
        options: [
          "Ronaldinho",
          "Cristino Ronaldo",
          "Wayne Rooney",
          "Lionel Messi"
        ]
    },
      {
        numb: 9,
        question: "Who is the most famous video game character of all time?",
        answer: "Mario",
        options: [
          "Mario",
          "Kratos",
          "Princess Zelda",
          "Mega Man"
        ]
    },
      {
        numb: 10,
        question: "What is the name of the circular object used to collect Pokémon?",
        answer: "Poke ball",
        options: [
          "Pokemon ball",
          "Poke Ball",
          "Pokemon Catcher",
          "Poke Sphere"
        ]
    },
    {
        numb: 11,
        question: "Which Mortal Kombat character has the ability to transform into a dragon?",
        answer: "Liu Kang",
        options: [
          "Jax",
          "Sub-Zero",
          "Liu Kang",
          "Kitana"
        ]
    },
    {
        numb: 12,
        question: "What is the name of the primary system used to rate videogame content in Europe?",
        answer: "PEGI",
        options: [
          "ESRB",
          "PEGI",
          "CERO",
          "KMRB"
        ]
    },
    {
        numb: 13,
        question: "LCS is the acronym for a professional eSports league centered around which game?",
        answer: "League of Legends",
        options: [
          "Smite",
          "Heroes of the Storm",
          "Dota 2",
          "League of Legends"
        ]
    },
    {
        numb: 14,
        question: "What does NES stand for?",
        answer: "Nintendo Entertainment System",
        options: [
          "Nintendo Entertainment System",
          "Nintendo Event Star",
          "Nintendo Eleven Sounds",
          "Nintendo Evening System"
        ]
    },
    {
        numb: 15,
        question: "Which platform is the best for gaming?",
        answer: "PC",
        options: [
          "Xbox Series X",
          "PlayStation 5",
          "PC",
          "Nintendo Switch"
        ]
    },
]

// when the start button is pressed

startButton.onclick = () => {
    rulesBox.classList.add('gameInfo');
}

// when the quit buttonn is pressed

quitButton.onclick = () => {
    rulesBox.classList.remove('gameInfo');
}

// when the continue button is pressed

continueButton.onclick = () => {
    rulesBox.classList.remove('gameInfo');
    gameBox.classList.add('activeGame');
    getQuestions(0);
    startTimer(timeValue);
}


// if the exit button is pressed while playing the game
exitButton.onclick = () => {
    window.location.reload();
}

    