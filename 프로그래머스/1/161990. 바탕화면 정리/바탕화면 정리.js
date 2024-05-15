function solution(wallpaper) {
    const x = [], y = [];
    // 파일 위치 정보만 알 수 있도록 wallpaper를 변환한다.
    wallpaper.forEach((line, indexX) => {
        Array.from(line).forEach((point, indexY) => {
            if (point === '#') {
                // wallpaper[i][j]일 때, x = j, y = i
                x.push(indexX); 
                y.push(indexY);
            }
        })
    });
    
    // 파일 위치에서 제일 극단적인 점을 구한다.
    const lux = Math.min(...x);
    const luy = Math.min(...y);
    const rdx = Math.max(...x);
    const rdy = Math.max(...y);
    
    // 시작점 끝점을 지정해 반환한다. (lux, luy, rdx, rdy 순으로 반환)
    return [lux, luy, rdx +1, rdy +1];
}

// wallpaper : 바탕화면 상태 (빈칸 . / 파일 #)(드래그 선택 or 삭제)
// 드래그한 거리 = |rdx - lux| + |rdy - luy|
// 드래그 크기는 = 모든 파일 위치의 x, y 좌표 묶음이 있을 때, 'min x,y 짝 max x+1, y+1을 구한다.'
// return [시작x, 시작 y, 끝 x, 끝y], 시작점 < 끝점

