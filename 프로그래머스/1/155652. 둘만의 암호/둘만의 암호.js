function solution(s, skip, index) {
    let answer = "";
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(x => !skip.includes(x)).join('');
    
    for(let i = 0; i < s.length; i++) {
        answer += alpha[(alpha.indexOf(s[i]) + index) % alpha.length];
    }
    
    return answer;
}