const filePath = process.platform === "linux" ? "/dev/stdin" : "./in/2750";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const res = solution(input);
res.forEach(val => console.log(val));

function solution(input) {
    const [_, ...val] = input.map((str) => Number(str));
    return val.sort((a, b) => a - b);
}