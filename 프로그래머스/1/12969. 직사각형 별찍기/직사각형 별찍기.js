process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const base = data.split(" ");
    const n = Number(base[0]);
    const m = Number(base[1]);
    
    const line = '*'.repeat(n);
    for(let i=0 ; i < m ; i++){
        console.log(line);
    }
});