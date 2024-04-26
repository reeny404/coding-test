function solution(n, m) {
    // 최소공배수 = a * b / 최대공약수
    const nDivisors = getDivisors(n);
    const divisors = getDivisors(m).filter(value => nDivisors.indexOf(value) !== -1);
    const 최대공약수 = Math.max(...divisors);
    
    return [최대공약수, n*m/최대공약수];
}

function getDivisors(number){
    let answer = [];
    for(let i=1 ; i <= number ; i++) {
        if (number % i == 0) {
            answer.push(i);
        }
    }
    return answer;
}
        
        