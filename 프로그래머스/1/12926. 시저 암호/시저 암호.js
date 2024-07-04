function solution(s, n) {
    return s.split('')
        .map(val => val === ' ' ? val : pushChar(val, n))
        .join('');
}

// 대문자는 아무리 밀어도 대문자, 소문자는 아무리 밀어도 소문자
function pushChar(char, n) {
    var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var smallLetters = "abcdefghijklmnopqrstuvwxyz";
    
    const letters = bigLetters.indexOf(char) !== -1 ? bigLetters : smallLetters;
    const pushedIndex = letters.indexOf(char) + n;
    const i = pushedIndex%letters.length;
    
    return letters[i];
}