function solution(n, m, section) {
    let answer = 0, lastSection = 0;
    
    for(let i=0 ; i < section.length ; i++) {
        const start = section[i], end = start + m-1;
        
        if (start <= lastSection) {
            continue;
        }
        
        lastSection = end;
        answer++;
        
        if (n < end) {
            break;
        }
    }
    
    return answer;
}