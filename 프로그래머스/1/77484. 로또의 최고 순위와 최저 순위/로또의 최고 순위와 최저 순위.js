
function solution(lottos, win_nums) {
  const cnts = getCounts(lottos, win_nums);

  return [getRank(cnts[0]), getRank(cnts[0] + cnts[1])].sort((a, b) => a - b);
}

// return [맞힌 갯수, 0인 갯수]
function getCounts(lottos, win_nums) {
  const results = [0, 0];
  for (let i = 0; i < lottos.length; i++) {
    const num = lottos[i];
    if (num === 0) {
      results[1] += 1;
    } else if (win_nums.indexOf(num) !== -1) {
      results[0] += 1;
    }
  }
  return results;
}

function getRank(count) {
    return Boolean(count) ? 7 - count : 6;    
}