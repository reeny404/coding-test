function solution(t, p) {
    var answer = 0;
    
    for (let i = 0, size = p.length; i < t.length - size + 1; i++) {
        const number = t.substring(i, i + size);
        if(number <= p) {
            answer++;
        }
    }
    
    return answer;
}
