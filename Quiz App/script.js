const startBtn = document.getElementById('start-btn')
const quizSection = document.querySelector('.quiz')
const quizNo = document.getElementById('quiz-no')
const questionTitle = document.getElementById('question')
const optionsContainer = document.getElementById('option-container')
let result = []
let curIndex = 0
let score = 0

async function FetchData(){
    let response = await fetch('https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=multiple')
    let data = await response.json()
    result = data.results
    DisplayQuestion()
}

function DisplayQuestion(){

    optionsContainer.innerHTML = ''
    if(curIndex>=result.length){
        quizNo.style.display = 'none'
        questionTitle.innerText = `You Scored ${score} out of ${result.length}`
        return

    }
    let currentQuestion = result[curIndex]
    quizNo.innerText = `Quiz No: ${curIndex+1}`
    questionTitle.innerText = currentQuestion.question
    options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    options.sort(()=> Math.random()-0.5)

    options.forEach(option => {
        let btn = document.createElement('button')
        btn.classList.add('btn','d-block', 'w-100', 'fs-2', 'mt-3', 'border-black')
        btn.innerText = option
        btn.addEventListener('click', ()=> checkAnswer(option, currentQuestion.correct_answer, btn))
        optionsContainer.appendChild(btn)

    });

}

function checkAnswer(selected, correct,btn){
    let buttons = optionsContainer.querySelectorAll('button')

    buttons.forEach(button=>{
        button.disabled = true
    })
    if(selected==correct){
        score++
        btn.classList.add('btn-success','text-white')
    }else{
        btn.classList.add('btn-danger', 'text-white')

        buttons.forEach(button=>{
            if(button.innerText===correct){
                button.classList.add('btn-success','text-white')
            }
        })
    }

    
    setTimeout(()=>{
        curIndex++
        DisplayQuestion()
    },3000)
}

startBtn.addEventListener('click', function(){
    FetchData()
    quizSection.style.display = 'block'

})