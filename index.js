

let timeLeft = document.querySelector (".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let count0fQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector (".core-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
{ id: "0",
question: "Which is the most widely spoken language in the world?",
options: ["Spanish", "Mandarin", "English", "German"],
correct: "Mandarin",
},

{ id: "1",
question: "Which is the only continent in the world without a desert?",
options: ["North America", "Asia", "Africa", "Europe"], 
correct: "Europe",
},

{ id: "2",
question: "Who invented Computer?",
options: ["Charles Babbage", "Henry Luce", "Henry Babbage",

"Charles Luce"],

correct: "Charles Babbage",
},
]

