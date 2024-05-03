function solution(food) {
    let answer = '';
    for(let i=1; i < food.length ; i ++){
        const count = food[i];
        if (count === 1) {
            continue;
        }
        
        answer += i.toString().repeat(count/2);
    }
    
    return answer + '0' + [...answer].reverse().join('');
}