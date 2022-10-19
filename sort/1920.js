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
    target.forEach((t) => {
        binarySearch(arr, t);
        const result = binarySearch(arr, t);
        if(result) {
            res.push(1)
        } else {
            res.push(0)
        }
    });
    return res;
}

//구현 //시간초과..???
function binarySearch(arr, target) {
    let res = false
    let left = 0;
    let right = arr.length;
    while(right >= left) {
        const idx = parseInt((left + right) / 2);
        if (target == arr[idx]) {
            res = true;
            break;
        } else if (target > arr[idx]) {
            left = idx + 1; 
        } else if (target < arr[idx]) {
            right = idx - 1;
        } 
    }
    return res;
}
