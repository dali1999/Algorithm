function solution(array, commands) {
    let answer = [];

    commands.map((command)=>{
        const [i, j, k] = command;
        const sliced = array.slice(i-1, j);
        const sortedSliced = sliced.sort((a, b)=>a-b)[k-1];
        answer.push(sortedSliced);
    })
    return answer;
}