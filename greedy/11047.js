//동전 N개의 합은 K
//필요한 동전의 최솟값

const filePath = process.platform === "linux" ? "/dev/stdin" : "./in/11047";
let input = require("fs").readFileSync(filePath).toString().split("\n");

console.log(solution(input));

function solution(input){
    const [first, ...second] = input;
    
    let total = parseInt(first.split(" ")[1]);
    const coins = second.reverse().map(val => parseInt(val));
    
    let count = 0;

    for(const coin of coins){
        if(total === 0){
            break;
        }
        if(coin <= total){
            count += parseInt(total/coin);
            total = total % coin;
        }
    }
    // coins.forEach((coin) => {
    //     while (coin <= total) {
    //         total = total - coin;
    //         count++;
    //     }
    // });

    return count;
}