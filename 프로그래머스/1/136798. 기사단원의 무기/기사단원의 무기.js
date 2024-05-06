function solution(number, limit, power) {
    let answer = 0;
    for(let i=1 ; i <= number ; i++){
        const count = getDivisorCount(i, limit);
        answer += limit < count ? power : count;
    }
    
    return answer;
}

function getDivisorCount(knight, limit) {
    let count = 0;
    const root = Math.sqrt(knight);
    for(let i=1 ; i < root ; i++) {
        if (knight % i === 0) {
            count += 2;
        }
        if (limit < count) {
            break;
        }
    }
    
    if (Number.isInteger(root)){
        count++;
    }
    
    return count;
}