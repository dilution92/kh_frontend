// 배열 리터럴
const arr = [1 , 2, '문자열', {}]
const [a, b] = arr
console.log(a)
console.log(b)


// 객체 리터럴
const user = {
    id:'abcdefg',
    name: 'HS',
    data:[1,2,3,4]
}
console.log('-------------')
const {id, name, data} = user
console.log(id)
console.log(name)
console.log(data)


function f(x) {
    console.log('호출됨!')
}
f(1)
f(1,2,3)

console.log(name)
const name1 = 'abc'

// console.log('블록 이전에 호출')
// {
//     console.log('블록 내부1에서 호출됨')
//     const x = 1
//     console.log(x)
//     {
//         console.log('블록 내부 2에서 호출됨')
//         const y = 5
//         console.log(y)
//     }
//     console.log(y)
// }
// console.log(x)

function outer() {
    const name = '바깥임'
    function showName() {
        const n = '안쪽데이터'
        console.log(`바깥: ${name}, 안: ${n}`)        
    }
    showName()
}
outer()


function outer() {
    const name = '바깥임'
    function showName() {
        const n = '안쪽데이터'
        console.log(`바깥: ${name}, 안: ${n}`)        
    }
    return showName;
}
const f1 = outer()
f1()

const dd = 'ㅇㅇ'
function outer1() {
    const name = '바깥'
    function closure() {
        const inner = '안쪽'
        console.log(`바깥: ${name}, 안: ${n}`)        
    }
    return closure();
}


//카운트다운
function countdown(x) {
    let data = x;
    function counter() {
       console.log(data--)
    }
        return counter;
}
const c = countdown(10)
c()
c()
c()

//호출 횟수
function 호출() {
    let data = 0;
    function counter() {
       console.log(`${++data}회 호출됨`)
    }
        return counter;
}
const cc = 호출()
cc()
cc()
cc()

// class Inner {
//     int 환경;
//     생성자(x){
//         this.환경 = x;
//     }
//     void inner(){
//         환경 --;
//     }
// }
