function solution(arr) {
    var answer = [];
    
    let prev = -1;
    for(let i=0; i < arr.length ; i++) {
        const element = arr[i];
        if (prev !== element){
            answer.push(element);
        }
        prev = element;
    }
    
    return answer;
}