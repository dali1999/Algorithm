function solution(price, money, count) {
    var answer = 0;
    let totalPrice = 0;
    for(let i=1; i<=count; i++){
        totalPrice += price*i;
    }

    if(totalPrice > money) answer = totalPrice - money;
    return answer;
}