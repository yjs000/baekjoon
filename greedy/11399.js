//인출시간

const filePath = process.platform === "linux" ? "/dev/stdin" : "./in/11399";
let input = require("fs").readFileSync(filePath).toString().split("\n");

console.log(solution(input));

function solution(input){
    const [first, second] = input;
    const time = second.split(" ").map(str => Number(str));
    let sum = 0;

    time.sort((a, b) => a - b);
    
    for(const idx in time){
        for(let i=0; i<=idx; i++){ //1 + (1+2) + (1+2+3)
            sum += time[i];
        }
    }

    return sum;
}