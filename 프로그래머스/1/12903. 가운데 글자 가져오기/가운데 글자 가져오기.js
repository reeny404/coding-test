function solution(s) {
    const count = s.length / 2;
    
    return s.length%2 === 1 
        ? s[Math.floor(count)]
        : s[count-1] + s[count];
}