function solution(a, b) {
    return a.reduce((prevResults, currentValue, i) => {
        return prevResults += a[i] * b[i]
    }, 0);
}