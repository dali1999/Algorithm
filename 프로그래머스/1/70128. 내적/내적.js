function solution(a, b) {
    let answer = 0;
    answer = a.reduce((acc, curr, currIdx)=> acc += curr* b[currIdx], 0)
    return answer;
}