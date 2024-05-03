const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
    let answer = '';
    
    for(let i=0, keyword = ''; i < s.length ; i++) {
        const char = s[i];
        if (!isNaN(Number(char))){
            answer += char + '';
            continue;
        }
        
        keyword += char;
        
        const index = words.indexOf(keyword);
        if (index !== -1){
            keyword = '';
            answer += index + '';
        }
    }
    
    return parseInt(answer);
}