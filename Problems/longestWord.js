const input = 'This is a dem ss'
const words = input.split(' ')
let longestWord = ''
let longLen = 0

for(let word of words){
    let length = word.length
    if(length>longLen){
        longLen = length
        longestWord = word
    }
}

console.log(longestWord)