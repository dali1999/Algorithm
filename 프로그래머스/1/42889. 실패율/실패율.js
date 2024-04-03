function solution(N, stages) {
    let failRate = [];
    for(let i=1; i<=N; i++){
        let fail = stages.filter(v => v === i).length;
        let reach = stages.filter(v => v >= i).length;
        let rate = fail/reach;
        failRate.push([rate, i]);
    }

    failRate.sort((a, b) => b[0]-a[0]);
    return failRate.map(v => v[1])
}