function solution(array, commands) {    
    return commands.map(command => {
        const start = command[0]-1, end = command[1], n = command[2]-1,
              results = array.slice(start, end).sort((a, b) => a-b);
        return results[n];
    });
}