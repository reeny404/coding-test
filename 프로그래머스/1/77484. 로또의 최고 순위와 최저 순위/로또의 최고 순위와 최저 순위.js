
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    const min = lottos.filter(n => win_nums.indexOf(n) !== -1).length;    
    const zero = lottos.filter(n => n === 0).length;

    return [rank[min + zero], rank[min]];
}