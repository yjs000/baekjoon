//동전 N개의 합은 K
//필요한 동전의 최솟값

//맞는 것 같은데 왜 틀렸다지..
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {
    console.log(solution(input));
    process.exit();
});

function solution(input){
    let total = input.splice(0, 1)[0].split(" ")[1];
    const coins = input.splice(1, input.length).reverse();
    
    let count = 0;
    coins.forEach((coin) => {
        coin = Number(coin);
        total = Number(total);
        while (coin <= total) {
            total = total - coin;
            count++;
        }
    });

    return count;
}