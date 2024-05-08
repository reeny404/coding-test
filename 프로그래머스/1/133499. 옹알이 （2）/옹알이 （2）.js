function solution(babblings) {
    const words = ["aya", "ye", "woo", "ma"];

    return babblings.filter(babbling => {
        let splitWord = babbling;
        
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            
            if (babbling.split(word.repeat(2)).length !== 1) { // 연속 단어 불가
                return false;
            }
            
            splitWord = splitWord.split(word).join(' ').trim();
        }
        
        return splitWord.length === 0;
    }).length;
}