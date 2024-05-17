function solution(players, callings) {
    const cache = {};
    for(let i=0 ; i < callings.length ; i++) {
        const call = callings[i];
        const index = cache[call] || players.indexOf(call);
        const prev = players[index-1];
        
        players[index-1] = call;
        players[index] = prev;
        
        cache[call] = index-1;
        cache[prev] = index;
    }
    
    return players;
}

// 추월할 때 이름을 불러준다 
//   추월한 사람이 n번째에 있다면, n번째를 n-1 번으로, n-1번째 사람을 n번째로 변경해야 함
// players 길이는 5만, callings 100만인 것 보니, 효율적으로 하지 않으면 시간 초과가 날 것
// linkedList가 조금더 빠르지 않을까? indexOf가 없어도 되니
//     -> map 에 {"사람이름" : {index : 숫자 n, prev : "사람이름"}}
//     -> 추월 시, p = map[사람이름]을 가져와서 
//            -> map[p.prev] = {index : p.index, prev : p}
//            -> map[p] = {index : p.index -1 , prev : 여기에 변수 prev 넣어주기 }
