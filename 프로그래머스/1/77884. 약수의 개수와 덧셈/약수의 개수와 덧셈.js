function solution(left, right) {
    var answer = 0;
    
    for(let i=left ; i <= right ; i++) {
        const divisorCount = getDivisorsCount(i);
        answer += divisorCount%2 ? -i : i;
    }
    return answer;
}

function getDivisorsCount(number) {
    let count = 0;
    for(let i=1 ; i <= number ; i++) {
        if (number%i == 0) {
            count++;
        }
    }
    
    return count;
}