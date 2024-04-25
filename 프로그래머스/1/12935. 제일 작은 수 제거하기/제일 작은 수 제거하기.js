function solution(arr) {
    if (arr.length <= 1) {
        return [-1];
    }
    const minNumber = Math.min(...arr);    
    const index = arr.indexOf(minNumber);
    arr.splice(index, 1);
    
    return arr;
}