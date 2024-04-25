function solution(arr, divisor) {
    var answer = arr.filter(value => (value % divisor) === 0);
    
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}