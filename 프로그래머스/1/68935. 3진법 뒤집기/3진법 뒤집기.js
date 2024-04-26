function solution(n) {
    var value = getReverse3notation(n);
    
    let answer = 0;
    for(let i=0 ; i < value.length ; i++){
        const current = value[i];
        
        const target = 3 ** (value.length - i - 1);
        answer += current * target;  
    }
    
    return answer;
}

function getReverse3notation (number) {
    const nto3notation = [];
    
    for(let quotient = number ; quotient !== 0 ; quotient = Math.floor(quotient / 3)){
        nto3notation.push(quotient%3);
    }

    return nto3notation.join('');
}