function solution(array, commands) {
    return commands.map(command => {
        const temp = array.slice(command[0]- 1, command[1])
            .sort((a, b) => {
                return a - b;
            });
        return temp[command[2]-1];
    });
}