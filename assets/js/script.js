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
      answer: "Poke Ball",
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

// if next button is clicked
nextButton.onclick = () => {
    if (questionsCount < questions.length - 1) {
        questionsCount++;
        getQuestions(questionsCount);
        clearInterval(timer);
        startTimer(timeValue);
        nextButton.style.display = 'none';
    } else {
      clearInterval(timer);
      showResults();
    }
    
}

// if exit game at the results page is clicked
returnButton.onclick = () => {
  window.location.reload();
}

// if the try again button is clicked
restartButton.onclick = () => {
  gameBox.classList.add('activeGame');
  resultsBox.classList.remove('activeResults');
  questionsCount = 0;
  timeValue = 15;
  userScore = 0;
  userScoreIncorrect = 0;
  plusOne.innerHTML = userScoreText;
  minusOne.innerHTML = userScoreIncorrectText;
  getQuestions(questionsCount);
  clearInterval(timer);
  startTimer(timeValue);
  nextButton.style.display = 'none';
}

let userScoreText = `<i class="fas fa-check"></i> ${userScore} correct`;
let userScoreIncorrectText = `<i class="fas fa-times"></i> ${userScoreIncorrect} incorrect`;

// gets question and choices text from questions array
function getQuestions (index) {
    const questionText = document.querySelector('.q-text');
    const questionNumber = document.querySelector('.q-number');
    let questionNumberText = `Question ${questions[index].numb}`;
    let questionTag = '<span>' + questions[index].question + '</span>';
    let optionsTag = '<div class ="option"><span>' + questions[index].options[0] + '</span></div>'
                    + '<div class ="option"><span>' + questions[index].options[1] + '</span></div>'
                    + '<div class ="option"><span>' + questions[index].options[2] + '</span></div>'
                    + '<div class ="option"><span>' + questions[index].options[3] + '</span></div>';
    questionText.innerHTML = questionTag;
    optionsBox.innerHTML = optionsTag; 
    questionNumber.innerHTML = questionNumberText;

    const option = optionsBox.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}


// determines if the chosen option is correct and displays feedback
function optionSelected (answer) {
    clearInterval(timer);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionsCount].answer;
    let totalChoices = optionsBox.children.length;
    let userScoreText = `<i class="fas fa-check"></i> ${userScore + 1} correct`;
    let userScoreIncorrectText = `<i class="fas fa-times"></i> ${userScoreIncorrect + 1} incorrect`;
    if ( userAnswer == correctAnswer) {
        userScore += 1;
        answer.classList.add('correct');
        plusOne.innerHTML = userScoreText;
    } else {
        userScoreIncorrect += 1;
        answer.classList.add('incorrect');
        minusOne.innerHTML = userScoreIncorrectText;
        for (i = 0; i < totalChoices; i++) {
            if (optionsBox.children[i].textContent == correctAnswer) {
                optionsBox.children[i].setAttribute('class', 'option correct');
            };
        }
    }

    // disable other choices after user input
    for (i = 0; i < totalChoices; i++) {
        optionsBox.children[i].classList.add('disabled');
    }
    nextButton.style.display = 'block';
}


// close the game and show results to user
function showResults() {
    rulesBox.classList.remove('gameInfo');
    gameBox.classList.remove('activeGame');
    resultsBox.classList.add('activeResults');
    const scoreBox = resultsBox.querySelector('.t-score');
    if (userScore > 10) {
      let scoreTag = '<p> You scored ' + userScore + ' out of ' + questions.length + '!</p>' + '<br>' + '<p>Amazing Job, You Are A True Gamer!</p> <p><i class="fas fa-grin-stars"></i></p>';
      scoreBox.innerHTML = scoreTag;
    } else if (userScore > 5) {
      let scoreTag = '<p> You scored ' + userScore + ' out of ' + questions.length + '!</p>' + '<br>' + '<p>Well done!</p> <p><i class="fas fa-grin-stars"></i></p>';
      scoreBox.innerHTML = scoreTag;
    } else {
        let scoreTag = '<p> You scored ' + userScore + ' out of ' + questions.length + '!</p>' + '<br>' + '<p>Better luck next time!</p> <p><i class="fas fa-grimace"></i></p>';
      scoreBox.innerHTML = scoreTag;
    }
  }

// get questions and options from array
function startTimer (time) {
    timer = setInterval(stopwatch, 1000);
    function stopwatch () {
        timeLeft.textContent = time + ' seconds';
        time--;
        if(time < 9) {
          let addZero = timeLeft.textContent;
          timeLeft.textContent = '0' + addZero;
        }
        if (time < 0) {
          clearInterval(timer);
          timeLeft.textContent = '00';
  
          let correctAnswer = questions[questionsCount].answer;
          let totalChoices = optionsBox.children.length;
  
          for (i = 0; i < totalChoices; i++) {
            if (optionsBox.children[i].textContent == correctAnswer) {
                optionsBox.children[i].setAttribute('class', 'option correct');
            }
          
          for (i = 0; i < totalChoices; i++) {
            optionsBox.children[i].classList.add('disabled');
          }
        }
          nextButton.style.display = 'block';
        }
    } 
  }