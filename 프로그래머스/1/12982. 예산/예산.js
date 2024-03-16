function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let sum = 0;
    let i=0;
    
    while(sum <= budget){
        sum += d[i];
        i++;
    }
    return i-1;
}