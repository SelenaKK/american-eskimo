/*quiz*/



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
            answer = answerEl.id
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



  