function solution(s) {
    const map = {};
    
    return [...s].map((char, i) => {
        const result = i-map[char] || -1;
        map[char] = i;
        return result;
    })
}
