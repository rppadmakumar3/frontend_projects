const inputBox = document.getElementById("input-txt")
const playBtn = document.getElementById("play-btn")
let resultTxt = document.getElementById("res-txt")
let hintTxt = document.getElementById("hint-txt")
let randomNum = Math.floor(Math.random()*10 + 1)

console.log(randomNum)

playBtn.addEventListener('click', function(){
    const value = inputBox.value

    if(value==randomNum){
        resultTxt.textContent = "You're Correct !"
        hintTxt.textContent = "Well Done!"
    }else{
        resultTxt.textContent = "Try Again !"
        if(value<randomNum){
            hintTxt.textContent = "Hint: Increase your Value"
        }else if(value>randomNum){
            hintTxt.textContent = "Hint: Decrease your Value"
        }
    }


})