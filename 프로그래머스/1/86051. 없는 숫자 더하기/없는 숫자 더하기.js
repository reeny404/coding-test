function solution(numbers) {
    var answer = 0;
    
    for(let i=1 ; i <= 9 ; i++) {
        const hasNumber = numbers.indexOf(i);
        if (hasNumber === -1){
            answer += i;            
        }
    }
    
    return answer;
}