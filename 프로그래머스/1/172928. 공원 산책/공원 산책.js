
function solution(park, routes) {
  // 시작 지점을 찾는다.
  let position = getStartPosition(park);

  // 한개의 routes (start -> end) 에서 경로 상에 장애물(X) 혹은 범위 밖인지 체크한다.
  for (let i = 0; i < routes.length; i++) {
    const [direction, n] = routes[i].split(" ");
    const endPosition = getEndPoition(position, direction, n);
    const line = (
      "EW".includes(direction) ? getHorizontalLine : getVerticalLine
    )(park, position, endPosition);

    const isImpossible = line.filter((l) => (l ?? "X") === "X").length;

    if (!isImpossible) {
      position = endPosition;
    }
  }

  // 아니라면 위치를 변경한다.
  return [position.row, position.col];
}

function getStartPosition(park) {
  for (let i = 0; i < park.length; i++) {
    const line = park[i];
    const index = line.indexOf("S");
    if (index === -1) continue;

    return {
      row: i,
      col: index,
    };
  }
  return {};
}

function getVerticalLine(park, start, end) {
  const max = Math.max(start.row, end.row),
    min = Math.min(start.row, end.row),
    colnum = start.col;

  let result = [];
  for (let i = min; i <= max; i++) {
    result.push((park[i] ?? "")[colnum]);
  }
  return result;
}

function getHorizontalLine(park, start, end) {
  const max = Math.max(start.col, end.col),
    min = Math.min(start.col, end.col);

  const line = park[start.row] ?? "";
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(line[i]);
  }
  return result;
}

function getEndPoition(position, direction, num) {
  let { row, col } = position;
  num = Number(num);
  switch (direction) {
    case "E": col += num; break;
    case "W": col -= num; break;
    case "S": row += num; break;
    case "N": row -= num; break;
  }
  return { row, col };
}