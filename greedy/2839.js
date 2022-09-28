// 3, 5
// N키로일때 최소 봉지, 정확히 N이 불가능하면 -1

// Greedy [x]
// 5 만 사용하는 것이 가장 좋음. 5로 나누어떨어지지 않는다면 3을 사용. 
// 나누어떨어질때까지 5는 하나줄이고, 3은 하나늘림
// 이걸 어ㅓㄸㅎ게 하지..

// 수학적
// 표를 만들어서 규칙을 찾아봄

function countBag(N) {
    let bag5 = 0; let bag3 = 0;

    bag5 = parseInt(N / 5);
    if(N % 5 == 0){
        return bag5;
    } else {
        while(bag5 != 0){
            i = 0;
            if((N - (3 * i)) % 5 == 0){
                bag3 = i;
                bag5 = bag5 - i;
                return bag3 + bag5
            }
        }
    }
}

function print(){
    const arr = [18,4,6,9,11];
    arr.forEach( val => {
        console.log(countBag(val));
    })        
}

print();