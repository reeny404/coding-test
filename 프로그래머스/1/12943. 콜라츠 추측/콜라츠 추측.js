function solution(num) {
    let collatzedNumber = num;    
    
    for(let i=0 ; i < 500 ; i++){
        if (collatzedNumber === 1) {
            return i;
        }
        
        collatzedNumber = collatz(collatzedNumber);
    }
    
    return -1;
}


function collatz(n){
    return n % 2 == 0 ? n/2 : n*3 +1;
}