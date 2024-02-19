// 1~4
// 1 2 3 4 1 2 3 4 ~
// 가장 먼저 탈락하는 사람 번호 
// 그 사람이 자신의 몇 번째 차례에 탈락하는지
// [ 번호, 차례 ]
// 탈락자가 생기지 않는다면, [0, 0]
function solution(n, words) {
    let answer = [0, 0];
    
    let spoken = [];
    
    spoken.push(words[0]); // 1번 부터
    for(let i=1; i<words.length; i++){
        let before = words[i-1];
        let current = words[i];

        if(!spoken.includes(current) && before[before.length-1] === current[0]){
            spoken.push(current)
        }else{
            const turn = parseInt(i/n)+1;
            const userNum =  (i%n)+1;
            return answer = [userNum, turn];
        }
    }
  
    return answer;
}