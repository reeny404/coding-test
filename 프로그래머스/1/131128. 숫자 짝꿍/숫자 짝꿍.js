function solution(X, Y) {
  const counts = new Array(10);
    
  for (let i = 0; i < 10; i++) {
    const cntX = X.split(i).length - 1;
    const cntY = Y.split(i).length - 1;
      
    counts[i] = Math.min(cntX, cntY);
  }

  const resultString = Object.keys(counts)
    .filter((v) => counts[v])
    .sort((a, b) => b - a)
    .map((v) => v.repeat(counts[v]))
    .join("");

  if (resultString[0] === "0") return "0";
  else if (resultString.length === 0) return "-1";
  else return resultString;
}


// 두수에서 공통 수로 만들수 있는 제일 큰 수 1, 0 -> 10, NO 01
// 짝지을 수 있는 숫자만 사용한다 ?? 
// 없으면 -1
