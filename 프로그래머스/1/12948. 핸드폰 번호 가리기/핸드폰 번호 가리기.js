function solution(phone_number) {
    const index = phone_number.length;
    const starCount = index-4;
    
    let answer = '';
    for(let i=0 ; i < starCount ; i++) {
         answer += '*'
    }
    
    return answer + phone_number.substring(starCount, index);
}