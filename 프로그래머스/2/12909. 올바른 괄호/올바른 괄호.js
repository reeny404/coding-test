function solution(s){
    let count = 0;
    for (let i=0; i < s.length ; i++) {
        const char = s[i];
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }
        
        if ( count === -1 ){
            return false;
        }
        
    }

    return count === 0;
}