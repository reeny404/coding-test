function solution(sizes) {
    const mins = [], maxs = [];
    
    for (let i=0 ; i < sizes.length ; i++) {
        const size = sizes[i];
        
        mins.push(Math.min(size[0], size[1]));
        maxs.push(Math.max(size[0], size[1]));
    }
    
    return Math.max(...mins) * Math.max(...maxs);
}