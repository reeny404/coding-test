function solution(a, b) {
    return a.map((val, i) => val * b[i])
        .reduce((a,b) => a+b);
}