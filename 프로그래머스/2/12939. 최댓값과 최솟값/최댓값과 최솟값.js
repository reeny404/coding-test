function solution(s) {
    const numbers = s.split(" ").map(v => +v);
    return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}