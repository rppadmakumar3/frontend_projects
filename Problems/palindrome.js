const input = 'malayalam'
let left = 0
let right = input.length-1
let flag = true

while(left<right){
    if(input[left]!=input[right]){
        flag = false
        break
    }
    left++
    right--
}

console.log(flag)