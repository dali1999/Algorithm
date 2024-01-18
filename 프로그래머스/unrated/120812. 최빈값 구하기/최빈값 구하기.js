function solution(array) {
    let answer = [];
    let number = array.reduce((acc, curr)=>{
        acc[curr]  = (acc[curr] || 0) + 1;
        return acc;
    }, {})
    
    let maxCount = Math.max(...Object.values(number));
    let findMax = Object.keys(number).filter((x) => number[x] === maxCount);
    return (findMax.length == 1) ? Number(findMax) : -1;
    
}
