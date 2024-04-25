function solution(n) {
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt) 
        ? (sqrt + 1)*(sqrt + 1)
        : -1;
}