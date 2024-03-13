

function solution(answers) {
    const rules = [
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5], 
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const scores = [0, 0, 0];
    
    // 각 수포자의 답안을 체크하고 점수를 계산
    for(let i = 0; i < rules.length; i++) {
        for(let j = 0; j < answers.length; j++) {
            scores[i] += answers[j] === rules[i][j % rules[i].length] ? 1 : 0;
        }
    }
    
    // 가장 높은 점수를 받은 수포자들을 배열에 저장
    const maxScore = Math.max(...scores);
    const winners = scores.reduce((acc, score, index) => {
        if(score === maxScore) acc.push(index + 1);
        return acc;
    }, []);
    
    return winners;
}
