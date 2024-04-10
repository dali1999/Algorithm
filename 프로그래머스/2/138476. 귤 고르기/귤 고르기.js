function solution(k, tangerine) {
    let answer = 0;
    let obj = {}; 
    
		tangerine.forEach((i) => {
		  obj[i] = obj[i] ? obj[i] + 1 : 1;
		});
		    
    const sortObj = Object.values(obj).sort((a, b) => b- a);
    console.log(sortObj);
    
    let sum = 0;
    
    for(let num of sortObj){
        ++answer;
        sum += num;
        if(k <= sum){
            break;
        }
    }
    
    return answer;
}