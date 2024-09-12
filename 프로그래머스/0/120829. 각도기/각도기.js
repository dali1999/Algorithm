function solution(angle) {
    var answer = 0;
    answer = angle === 180 ? 4 : angle>90 ? 3 : angle===90 ? 2 : angle> 0 ? 1 : -1
    return answer;
}