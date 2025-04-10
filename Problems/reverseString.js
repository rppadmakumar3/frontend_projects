const input = "padmakumar"
const n = input.length
let reversed = ''
for(i=n-1;i>=0; i--){
    reversed += input[i]
}

console.log(reversed)