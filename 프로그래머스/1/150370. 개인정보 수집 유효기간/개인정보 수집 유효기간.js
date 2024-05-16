function solution(today, terms, privacies) {
    // privacies filtering
    //    1) 약관 수집 로그와 매칭되는 약관&보관기간 찾기 >> privatcies[1] === terms[0] 같은 것을 찾기
    //    2) 만료일 찾기 >> privatcies[0](=동의 날짜) 에 addMonth (terms[1]) 한 날짜 찾기 
    //    3) 오늘과 비교하기 >> '오늘 < 만료일'이면 return 할 결과값 에 추가
    //    4) 결과값들 오름차순 정렬하여 배열로 반환    
    const arrayTerms = {};
    terms.forEach(val => {
        const v = val.split(" ");
        arrayTerms[v[0]] = Number(v[1]);
    });
    
    const answer = [];    
    privacies.forEach((privacy, i) => {
        const info = privacy.split(" ");
        const startDate = new Date(info[0]);
        const expireMonth = arrayTerms[info[1]];
        const endDate = startDate.setMonth(startDate.getMonth() + expireMonth);
        
        if (new Date(today) >= endDate) {
            answer.push(i+1);
        }
    });
    
    return answer.sort((a,b) => a-b);
}

// 파기 대상 개인 정보 번호를 오름차순으로 반환한다.
// terms : " "을 기준으로 0번째 약관 문자, 1번째 유효한 개월 수(n)
// privacies : " "을 기준으로 0번째 동의 날짜, 1번째 약관 문자