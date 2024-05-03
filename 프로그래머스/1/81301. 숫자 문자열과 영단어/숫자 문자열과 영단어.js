

function solution(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    let answer = '';    
    for(let i=0, keyword = ''; i < s.length ; i++) {
        const char = s[i];
        if (!isNaN(parseInt(char))){
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