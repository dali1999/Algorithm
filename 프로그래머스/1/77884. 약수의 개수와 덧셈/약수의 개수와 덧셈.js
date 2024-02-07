function solution(left, right) {
    let answer = 0;
    
    let numArr = []
    let countArr = []; //[2, 4, 4, 5, 2]
    let count = 0;
    let index = 1;
    
    let evenArr = [];
    let oddArr = [];
    
    // 약수 구하기
    for(let i=left; i<=right; i++){
        numArr.push(i);
        while(index <= i){
            if(i%index === 0) count++;
            index++;
        }
        countArr.push(count);
        index = 1;
        count = 0;
    }
    
    
    for(let i=0; i<countArr.length; i++){
        countArr[i] % 2 === 0 ? evenArr.push(numArr[i]) : oddArr.push(numArr[i]);
    }
    
    const evenAdd = evenArr.reduce((acc, curr)=>acc+curr, 0)
    const oddAdd = oddArr.reduce((acc, curr)=>acc+curr, 0)
    
    answer = evenAdd > oddAdd ? evenAdd-oddAdd : oddAdd-evenAdd;
    return answer;
    
}