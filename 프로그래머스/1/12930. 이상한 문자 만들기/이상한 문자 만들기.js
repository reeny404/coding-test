function solution(s) {
    const words = s.split(' ');
    return words.map(word => change(word)).join(' ');
}

function change(word){
    return [...word]
        .map((char, i) => i%2 ==0 ? char.toUpperCase() : char.toLowerCase())
        .join('');
}