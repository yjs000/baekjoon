// 3, 5
// N키로일때 최소 봉지, 정확히 N이 불가능하면 -1

// Greedy [x]
// 5 만 사용하는 것이 가장 좋음. 5로 나누어떨어지지 않는다면 3을 사용. 
// 나누어떨어질때까지 5는 하나줄이고, 3은 하나늘림
// 이걸 어ㅓㄸㅎ게 하지..

// 수학적
// 표를 만들어서 규칙을 찾아봄

function countBag(N) {
    let res = 0;
    function count(N){
        if(N < 0){
            return -1;
        } else if(N % 5 == 0){
            // console.log("n%5", N, res)
            return res += parseInt(N / 5);
        } else {
            // console.log("-3", N, res)
            N -= 3;
            res = res + 1;
        } 
        return count(N);
    }
    return count(N);
}

function print(){
    const arr = [18,4,6,9,11];
    arr.forEach( val => {
        console.log(countBag(val));
    })        
}

print();