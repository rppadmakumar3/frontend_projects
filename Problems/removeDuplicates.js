const nums = [1,2,2,4,5]
const result = []

for(let num of nums){
    if(result.includes(num)){
        continue
    }else{
        result.push(num)
    }
}

console.log(result)