function solution(absolutes, signs) {
    let answer = 0;
    for(let i=0; i < absolutes.length ; i++) {
       answer += absolutes[i] * (Number(signs[i]) ? 1 : -1);
        console.log(answer);
    }
    return answer;
}