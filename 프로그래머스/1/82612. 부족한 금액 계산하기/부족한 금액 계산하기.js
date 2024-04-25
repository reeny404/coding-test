function solution(price, money, count) {
    const totalPrice = getTotalprice(price, count);
    
    const remains = money - totalPrice;
    return Math.sign(remains) === -1 ? -remains : 0;
}

function getTotalprice(price, count) {
    let result = 0;
    for(let i=1 ; i<= count ; i++){
        result += price * i;
    }
    return result;
}