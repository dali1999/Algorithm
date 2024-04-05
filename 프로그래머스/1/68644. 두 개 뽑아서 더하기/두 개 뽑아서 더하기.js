function solution(numbers) {
    let sumArr = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i != j){
                sumArr.push(numbers[i] + numbers[j]);
            }
        }
    }
    let answer = [...new Set(sumArr)].sort((a, b)=>a-b);
    return answer;
}