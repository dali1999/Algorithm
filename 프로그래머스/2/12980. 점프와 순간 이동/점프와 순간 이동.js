function solution(n)
{
    let count = 0;
    while(n){
        // 2의 배수 아닐 경우에만  +1
        if(n%2 === 1){
            count += 1;
        }
        // n이 0될때까지 2로 나누기
        n = Math.floor(n/2)
    }
    return count;
}