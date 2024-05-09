function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    s = s.slice(i);
    const index = indexOfEqualCount(s);
    answer++;
    i = index;
      
    if (index === -1) {
      break;
    }
  }

  return answer;
}

function indexOfEqualCount(s) {
  const x = s[0];
  for (let j = 0, countX = 0, countNoneX = 0; j < s.length; j++) {
    s[j] === x ? countX++ : countNoneX++;
    if (countX === countNoneX) {
      return j;
    }
  }

  return -1;
}