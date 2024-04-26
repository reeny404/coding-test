function solution(n, m) {
    var answer = [];
    
    // 최소공배수 = a * b / 최대공약수
    const nDivisors = getDivisors(n);
    const mDivisors = getDivisors(m);
    const divisors = mDivisors.filter(value=> nDivisors.indexOf(value) !== -1);
    answer[0] = Math.max(...divisors);
    
    // 공배수 구하기
    answer[1] = n*m / answer[0];
    
    return answer;
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
        
        