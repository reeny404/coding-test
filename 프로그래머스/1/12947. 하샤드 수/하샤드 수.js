function solution(x) {
    const sum = (x + '').split('').reduce((a,b) => Number(a) + Number(b));
    
    return x%sum == 0
}