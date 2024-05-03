function solution(k, score) {    
    const top3 = [];
    let min = 0;
    
    return score.map((val, i) => {
        min = Math.min(...top3);
        if (i < k) {
            top3.push(val);
            return Math.min(...top3);
        }
        if (min > val) {
            return min;
        }
        top3.push(val);
        top3.sort((a,b) => b-a).pop();
        return Math.min(...top3);
    });
}