/*quiz*/

/*

const quizData = [
    {
        question: "How much time can you dedicate to exercise and playtime with your dog each day?",
        a:" At least an hour or two a day",
        b:"Less than an hour a day",
        correct: "a",
    },
    {
        question: "Do you have experience training and socializing dogs?",
        a:"I have some experience and enjoy training and socializing dogs.",
        b:"I'm new to dog ownership. I would like to find someone else to train my dog.",
        correct: "a",
    },
    {
        question:"Are you comfortable with a dog that requires regular grooming and sheds quite a bit?",
        a:"I'm busy and I prefer a low-maintenance dog.",
        b:"I don't mind regular grooming and shedding at all.",
        correct:"b",
    },
    {
        question:"Are you looking for a dog that is generally friendly with people?",
        a:"Yes, I would like to have a friendly furry BFF!",
        b:"No, I prefer a dog that is more independent.",
        correct: "a",
    },
    {
        question:"How do you feel about a dog that barks often?",
        a:"I prefer a quieter dog because I'm living in an apartment.",
        b:"I am comfortable with a dog that barks frequently.",
        correct:"b",
    },
    {
        question:"Are you looking for a dog that is friendly with other dogs?",
        a:"Yes, I would like to have a sociable dog.",
        b:"No, I don't want my dog to be friendly and sociable.",
        correct:"b",
    },
    

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('quiz_question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0



loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
    return answer 
}


submitBtn.addEventListener('click', () =>{
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++  
        }

       currentQuiz++

       if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
           quiz.innerHTML =
           `<p>you got ${score}/${quizData.length}!</p>
            <p>Please using the score as a reference, while considering bringing an eskie home.</p>`
        }
    }
    
    
})

*/

/*reference:https://www.youtube.com/watch?v=riDzcEQbX6k*/

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('quiz-container')
let randomQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answers-btn')

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz(){
    
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
  showQuestion(randomQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btns')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    });
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = 'restart the quiz'
        startButton.classList.remove('hide')
    }
   
} 

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }

}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}





const questions = [
    {
        question: 'How much time can you dedicate to exercise and playtime with your dog each day?',
        answers: [
            {text: 'At least an hour a day', correct: true },
            {text: 'Less than an hour a day', correct: false }
        ]
    },
    {
        question: 'Do you have experience training and socializing dogs?',
        answers: [
            {text: 'I have some experience and enjoy training and socializing dogs', correct: true },
            {text: 'I am new to dog ownership. I would like to find someone else to train my dog', correct: false }
        ]
    },
    {
        question: 'Are you comfortable with a dog that requires regular grooming and sheds quite a bit?',
        answers: [
            {text: 'I am busy and I prefer a low-maintenance dog', correct: false },
            {text: 'I do not mind regular grooming and shedding at all', correct: true }
        ]
    },
    {
        question: 'Are you looking for a dog that is generally friendly with people?',
        answers: [
            {text: 'Yes, I would like to have a friendly furry BFF!', correct: true },
            {text: 'No, I prefer a dog that is more independent', correct: false }
        ]
    },
    {
        question: 'How do you feel about a dog that barks often?',
        answers: [
            {text: 'I prefer a quieter dog because I am living in an apartment', correct: false },
            {text: 'I am comfortable with a dog that barks frequently', correct: true }
        ]
    },
    {
        question: 'Are you looking for a dog that is friendly with other dogs?',
        answers: [
            {text: 'Yes, I would like to have a sociable dog', correct: false },
            {text: 'No, I do not want my dog to be friendly and sociable', correct: true }
        ]
    },


]
