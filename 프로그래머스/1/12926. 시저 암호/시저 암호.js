function solution(s, n) {
    return s.split('')
        .map(val => {
            if (val === ' ') {
                return val;
            }
            const code = pushChar(val, n);
            return String.fromCharCode(code);
        })
        .join('');
}

// 대문자는 아무리 밀어도 대문자, 소문자는 아무리 밀어도 소문자
function pushChar(char, n) {
    const ascii = char.charCodeAt();
    const asciiPushed = char.charCodeAt() + n;
    if (ascii >= 97 && ascii <= 122) { // 소문자
        return asciiPushed > 122 ? asciiPushed % 122 + 96 : asciiPushed;
    } else if (ascii >= 65 && ascii <= 90) { // 대문자
        return asciiPushed > 90 ? asciiPushed % 90 + 64 : asciiPushed;
    }
    return asciiPushed;
}