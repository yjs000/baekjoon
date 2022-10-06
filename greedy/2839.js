// 3, 5
// N키로일때 최소 봉지, 정확히 N이 불가능하면 -1

// Greedy [x]
// 5 만 사용하는 것이 가장 좋음. 5로 나누어떨어지지 않는다면 3을 사용. 
// 나누어떨어질때까지 5는 하나줄이고, 3은 하나늘림
// - 재귀
// - while

// 수학적인 방법

let readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(line){
    input = Number(line);
    rl.close();
}).on("close", function(){
    let res = countBag(input);
    console.log(res)
    process.exit();
})

function countBag(input) {
    let res = 0;
    function count(N){
        if(N < 0){
            return -1;
        } else if(N % 5 == 0){
            return res += parseInt(N / 5);
        } else {
            N -= 3;
            res = res + 1;
        } 
        return count(N);
    }
    return count(input);
}