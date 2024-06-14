function solution(n) {
    const count = getCount(n);
    
    for(let i=1 ; ; i++){
        const bigN = n + i;
        const bigNCount = getCount(bigN);
        if (bigNCount === count) {
            return bigN;
        }
    }
    
}

function getCount(n) {
    const nBy2 = n.toString(2);
    return nBy2.split('').filter(c => c ==1).length
}