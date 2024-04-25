function solution(n) {
    var answer = '수박'.repeat(n/2);
    return answer + (n%2 === 1 ? '수' : '');
}