function solution(a, b, n) {    
    let answer = 0;
    
    let bottles = n;
    let isContinue = true;
    do {
        const chagedBottles = Math.floor(bottles / a) * b;
        bottles = chagedBottles + bottles % a;
        answer += chagedBottles;
        
        isContinue = chagedBottles !== 0;
    } while (isContinue)
    
    return answer;
}

