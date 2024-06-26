function solution(d, budget) {
  // 작은 숫자순으로
  const sortedArray = d.sort((a, b) => a - b);

  // budget에서 계속해서 값을 빼준다.
  for (let i = 0; i < sortedArray.length; i++) {
    budget -= sortedArray[i];
    // 음수가될 경우 i 반환
    if (budget < 0) {
      return i;
    }
  }
  return sortedArray.length;
}
