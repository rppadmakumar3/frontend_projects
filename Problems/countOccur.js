const input = 'padmakumar'
const result = {}

for(let char of input){
    if(result[char]){
        result[char] += 1
    }else{
        result[char] = 1
    }
}

console.log(result)