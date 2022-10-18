const filePath = process.platform === "linux" ? "/dev/stdin" : "./in/1920";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const res = solution(input);
res.forEach((val) => console.log(val));

//일일이 찾으면 시간초과 => 이분탐색
function solution(input) {
    const [_, second, __, last] = input;
    const res = [];
    const arr = second
        .split(" ")
        .map((val) => Number(val))
        .sort((a, b) => a - b);
    const target = last.split(" ").map((val) => Number(val));
    target.forEach((t) => (binarySearch(arr, t) ? res.push(1) : res.push(0)));
    return res;
}

//구현
function binarySearch(arr, target) {
    console.log("binarySearch")
    let res = false
    let left = 0;
    let right = arr.length;
    const idx = parseInt((left + right) / 2);
    while(left < idx && idx < right) {
        console.log(left, right, idx) //0, 5, 2 무한루프
        if (target == arr[idx]) {
            res = true;
        } else if (target > arr[idx]) {
            left = idx;
        } else if (target < arr[idx]) {
            right = idx;
        }       
    }
}
