// 문제 1. 주어진 문자열을 뒤집어서 반환하는 함수를 작성해주세요!
// 예를 들어, 문자열 'spartan'이 주어지면, 결과는 다음과 같아야 합니다: 'natraps'*
function test1(str) {
  return str
    .split("")
    .reverse()
    .reduce((a, b) => a + b);
}
console.log(test1("spartan"));

// 문제 2. 주어진 문자열을 요약하는 함수를 작성해주세요!
// 예를 들어, 문자열 ‘aaabbbc’가 주어지면 결과는 다음과 같아야 합니다: ‘a3/b3/c1’
// 또한, 문자열 ‘ahhhhz’가 주어지면 결과는 다음과 같아야 합니다: ‘a1/h4/z1’
function test2(str) {
  const charCount = {};
  str.split("").forEach((char) => {
    charCount[char] = (charCount[char] || 0) + 1;
  });

  let answer = "";
  for (const key of Object.keys(charCount)) {
    answer += key + charCount[key] + "/";
  }

  return answer.substring(0, answer.length - 1);
}
console.log(test2("aaabbbc"));
console.log(test2("ahhhhz"));

// 문제 3. 주어진 숫자가 소수인지 아닌지 판별하는 함수를 작성해주세요.
// 소수는 1과 자기 자신으로만 나누어지는 1보다 큰 정수입니다.
// (힌트: 나머지 값을 구하는 연산자는 % 입니다. → e.g. 3 % 2는 1입니다.)
function test3(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

console.log("소수 여부 : 15는 " + test3(15));
console.log("소수 여부 : 19는 " + test3(19));
