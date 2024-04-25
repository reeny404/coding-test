function solution(n) {
    const str = (n + '')
        .split('')
        .sort().reverse()
        .reduce((a,b) => a+b);
    return Number(str);
}