function solution(survey, choices) {
  // 1) 순서대로 RT, CF, JM, AN 의 점수를 담을 result 생성 (정해진 순서대로 점수를 매겨야 함)
  const result = {};

  // 2) 배열 길이만큼 for문을 돌면서 4를 기준으로 양수 음수 덧셈을 하자 (배열 돌면서 123 > 비동의  567 > 동의)
  //      나중에 음수라면 첫번째글자를, 양수라면 두번째글자를 반환하면 된다?
  //          no, 양수 음수 덧셈을 하고 난 결과값에 동의 시 양수를 더할지 음수를 더할지 고민해야하는데
  //    -> 방법을 바꾸자. R, T, C, F, J, M, A, N 각각을 점수로 저장하는 것은?
  //       점수는 하나인데? 양음수 한가지로 표현할까? 아니면 각각으로?
  //    =====> 각각으로 가자 4로 나눈 몫으로 n번째 글자를 선택해서 %4 나머지 점수를 더하면 될 듯
  survey.forEach((types, i) => {
    const choice = choices[i];

    const isMinus = choice < 4;
    const type = types[isMinus ? 0 : 1];
    const score = isMinus ? 4 - choice : choice % 4;

    result[type] = (result[type] ?? 0) + score;
  });

  // 3) 만들어진 result 변수에서 더 큰 점수를 얻은 성격 유형을 조합해 반환한다.
  return ["RT", "CF", "JM", "AN"]
    .map((val, i) => {
      const score0 = result[val[0]] || 0;
      const score1 = result[val[1]] || 0;

      // 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단합니다
      return score0 < score1 ? val[1] : val[0];
    })
    .join("");
}


// RT , CF, JM, AN
// 판단지표 1차원 배열 survey -> 비동의 + 동의
// 선택지 1차원 정수 배열 choices 
// survey 길이 = choices 길이, 각 배열의 i번째끼리 매칭됨
// 4 > choice = 동의 // 4 < choice = 비동의 // 4 == 중립 -> 0점

