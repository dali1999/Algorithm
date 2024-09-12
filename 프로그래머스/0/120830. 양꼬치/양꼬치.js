function solution(n, k) {
    let dis = ~~(n / 10) * 2000;
    let total = 12000 * n + 2000 * k;
    console.log(dis)
    return total-dis;
}