const filePath = process.platform === "linux" ? "/dev/stdin" : "./in/1920";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while(right >= left) {
        const idx = parseInt((left + right) / 2);
        if (target == arr[idx]) {
            return 1
        } else if (target > arr[idx]) {
            left = idx + 1; 
        } else if (target < arr[idx]) {
            right = idx - 1;
        } 
    }
    return 0;
}
// binarySearch사용해도오류 => input은 바로 접근
// const [_, second, __, last] = input
const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
const target = input[3].split(" ").map(Number);

//foreach보다 map으로 도니까 훨씬 시간 단축
const res = target.map(t => binarySearch(arr, t));
console.log(res.join("\n"));