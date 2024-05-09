function solution(n, lost, reserve) {
  const all = new Array(n).fill(1);
  lost.forEach((n) => {
    all[n - 1] -= 1;
  });
  reserve.forEach((n) => {
    all[n - 1] += 1;
  });
  return all.filter((student, i) => {
    if (student !== 0) {
      return true;
    }

    if (all[i - 1] === 2) {
      all[i]++;
      all[i - 1]--;
    } else if (all[i + 1] === 2) {
      all[i]++;
      all[i + 1]--;
    } else {
      return false;
    }
    return true;
  }).length;
}