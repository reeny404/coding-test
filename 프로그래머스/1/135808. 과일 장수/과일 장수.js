
function solution(k, m, score) {
    score.sort((a, b) => a-b);

    let answer = 0;
    while(score.length >= m) {
        const box = [];
        for(let i=0 ; i < m ; i++) {
            box.push(score.pop());
        }
        answer += Math.min(...box) * m; // 사과 최저 점수 * 사과 갯수
    }
    
    return answer;
}