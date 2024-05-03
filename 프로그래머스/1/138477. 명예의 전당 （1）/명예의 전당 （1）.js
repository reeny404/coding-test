function solution(k, score) {
//     const top3 = [], answer = [];   
//     for (let i=0; i < k; i++){
//         top3.push(score[i])
//         answer.push(Math.min.apply(null, top3))
//     }
    
//     let min = Math.min(...top3);
//     for(let i=k; i < score.length ; i++){
//         const cur = score[i];
//         if (min > cur) {
//             answer.push(min);
//             continue;
//         }
//         top3.push(cur);
//         top3.sort((a,b) => b-a).pop();
//         min = Math.min(...top3);
//         answer.push(min);
//     }
    
    const top3 = [], answer = [];
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
    return answer;
}