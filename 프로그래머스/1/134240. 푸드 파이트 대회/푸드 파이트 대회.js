function solution(food) {
    var answer = '';
    let arr = [];

    food.map((f,i) => {
        f = f % 2 == 0 ? f : f -1; //홀수면 -1
        for(let j = 0; j < f / 2; j++){ //2로 나눈것 만큼 push
            arr.push(i);
        }
    });

    answer = arr.join('') + 0 + arr.reverse().join('');

    return answer;
}