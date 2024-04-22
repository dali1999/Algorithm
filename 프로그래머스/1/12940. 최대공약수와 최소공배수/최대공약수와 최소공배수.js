function calc_gcd(a, b) {
    if (b == 0) return a;
    return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}


function solution(n, m) {
    var gcd = calc_gcd(n, m);
    var lcm = (n * m) / gcd;
 
    return [gcd, lcm];
}