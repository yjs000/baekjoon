const filePath = process.platform === "linux" ? "/dev/stdin" : "./in/2750";
let input = require("fs").readFileSync(filePath).toString().split("\n");

console.log(solution(input));

//틀렷다고..
function solution(input) {
    const val = input.map((str) => Number(str));
    const set = new Set();
    const res = [];
    val.forEach((item) => set.add(item));
    for (const item of set) {
        res.push(item);
    }

    return res.sort((a, b) => a - b);
}//
