//ctrl alt N
//console.log('test');

//자바스크립에서 변수 선언


// ES6 변수, 상수 선언
var name; //함수 레벨 스코프
let name1 = 'abc'; // 변수 선언 방법
const name2 = 'abcd'; //const 는 자바에서 final (변경 불가능) 역할

console.log(name);
console.log(name1);
console.log(name2);

//동적타이핑
// 1. 값을 보고 타입 추론
// 2. 언제든 식별자의 값이 변경될 수 있음
// 3. 

// 선언 - 식별자를 등록
// 초기화 다계 - 값을 위한 공간을 할당하고 식별자랑 연결함. 초기화 하지 않았다면 undefined

//식별자(identifier)
//변수
//함수
//클래스
//식별자 - 실행 컨텍스트에 등록됨
/**
 * - 특수문자 제외한 숫자, 문자, 언더스코어(_), 달러($)ㅡ 기호 가능
 * - 숫자로 식별자 이름 시작은 불가능
 * - 예약어(keyword, reserved word) 사용 불가능
 */
 

const n = 10;
const message='test'

console.log(`상수 n의 값 : ${n}.상수 message의 값 : ${message}`);

//자바 스크립트에서 객체는 컨테이너 내용물만 바뀌는 것
const obj = {
    abc: 'abc'
}
//멤버 접근 연산자(.)
console.log(obj.abc)

// 계산된 멤버 전근 연산자([]) computed member access operator
console.log(obj['abc'])

obj['alpha'] = 'a'
obj['beta'] = 'b'
console.log(obj)

const obj1 = {
    abc: 'abc'
}

const obj2 = {
    abc: 'abc'
}


const a = 10

if (a > 5){
    console.log('a가 5보다 큼')
}

for(let i =0; i<10; i++){
    console.log(`${i+1}번째 출력.`)
}


const obj3 ={
    food: '감자',
    number: 10,
    arr: [1,2,3]
}

for(p in obj3){
   console.log(obj3[p])
}



const obj4 =['감자',10,[1,2,3]]


for(value in obj4){
   console.log(value)
}


function test1(a, b){
    return `${a}와 ${b}의 합은 ${a+b} 입니다.`
}

const resultMessage = test1 (1, 2)
console.log(resultMessage)


const aa = (a, b) => `${a}와 ${b}의 합은 ${a+b} 입니다.`
const resultMessage1 = aa (1, 2)
console.log(resultMessage1)



const obj5 = {
    name: 'hs',
    say: function() {
        console.log('뭔가 말함')
    }
}
obj5.say
