function solution(ingredient) {
    let answer = 0;
    const stack = [];
    for (let i=0 ; i < ingredient.length ; i++) {
        stack.push(ingredient[i]);
        
        const target = stack.slice(-4);
        if (target.join('') !== '1231') {
            continue;
        }
        
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer++;
    }
    return answer;
}
