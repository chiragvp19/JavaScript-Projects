const questions=[
    {
        question:'Who is known as the "Master Blaster" in cricket?',
        answers:[
            {text:"Sachin Tendulkar", correct: true},
            {text:"Ricky Ponting", correct: false},
            {text:"Virat Kohli", correct: false},
            {text:"Brian Lara", correct: false},
        ]
    },
    {
        question:' In cricket, what does LBW stand for?',
        answers:[
            {text:"Leg Before Wicket", correct: true},
            {text:"Long Boundary Wall", correct: false},
            {text:"Legside Bowling Wicket", correct: false},
            {text:"Leg Batsman Wicket", correct: false},
        ]   
    }
    ,
    {
        question:'Who holds the record for the highest individual score in Test cricket?',
        answers:[
            {text:"Virat Kohli", correct: false},
            {text:"Sachin Tendulkar", correct: false},
            {text:"Brian Lara", correct: true},
            {text:"Don Bradman", correct: false},
        ]   
    }
    ,
    {
        question:"Under Dhoni's captaincy, India won its first T20 World Cup in which year?",
        answers:[
            {text:"2007", correct: true},
            {text:"2009", correct: false},
            {text:"2011", correct: false},
            {text:"2013", correct: false},
        ]   
    }
    ,
    {
        question:"Yuvraj Singh was awarded the Player of the Tournament in the 2011 ICC Cricket World Cup. In which country was the World Cup held? ",
        answers:[
            {text:"Sri Lanka", correct: false},
            {text:"Bangladesh", correct: false},
            {text:"India", correct: true},
            {text:"Australia", correct: false},
        ]   
    }
    ,
    {
        question:"In 2015, AB de Villiers scored the fastest century in One Day Internationals (ODIs). How many balls did he take to achieve this milestone? ",
        answers:[
            {text:"44", correct: true},
            {text:"52", correct: false},
            {text:"57", correct: false},
            {text:"63", correct: false},
        ]   
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){   
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion(); 
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +". "+currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
    }
    else{
    selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true")
        {
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!!!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length)
showQuestion();
else
showScore();
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length)
    handleNextButton();
    else
    startQuiz();
})
startQuiz();






