function solution(strings, n) {
    return strings.map((str)=> str[n] + str)
        .sort()
        .map(str => str.slice(1));
}