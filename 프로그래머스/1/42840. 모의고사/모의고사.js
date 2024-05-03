function solution(answers) {
    const pickedArray = getPickedArray(answers);
    
    const result = [];
    for(let i = 0, maxValue = Math.max(...pickedArray) ; i < pickedArray.length ; i++ ){
        if (pickedArray[i] === maxValue){
            result.push(i + 1);
        }
    }
    
    return result;
}

function getPickedArray(answers) {
    const pick1 = [1, 2, 3, 4, 5];
    const pick2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const pick3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const pickedArray = [0, 0, 0];
    for(let i = 0 ; i < answers.length ; i++ ){
        const correctValue = answers[i]
        if (correctValue === pick1[i%pick1.length]) pickedArray[0] += 1;
        if (correctValue === pick2[i%pick2.length]) pickedArray[1] += 1;
        if (correctValue === pick3[i%pick3.length]) pickedArray[2] += 1;
    }
    
    return pickedArray;
}