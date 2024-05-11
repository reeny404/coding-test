function solution(s, skip, index) {
    const array = new Array(26).fill(0).map((v, i) => String.fromCharCode(i + 97))
        .filter(v => !skip.includes(v));
    
    return Array.from(s).map(char => {
        const i = array.indexOf(char);
        return array[(i + index) % array.length];
    }).join('');
}

// s -> index 만큼 뒤로 물리기
// z -> a 순환
// skip 알파벳 제외
// 97 ~ 122