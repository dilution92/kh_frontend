# 1. 자바스크립트 등자배경

- 브라우저 제어
- Ajax(Asynchronus Javascript and XML)
 - 서버에 API 콜 할 때 사용


브라우저는 자바스키립트를 해석할 수 있는 엔진들을 내장하고 있음
ex) 크롬 - V8

노드
-> 서버 사이드에서 자바스크립트를 사용하기 위해 V8엔진을 사용하여 만듬


# 2. 용어 정리

- DOM: Document Object Model
 - 브라우저에 렌더링 된 요소들(element, tag)
- 이벤트: 브라우저 상에서 발생한 액션들

# 3. 자바스크립트의 타입

원시타입(primitive type)
- 숫자(Number)
 - 64비트 부동소수점 정밀도
- 문자열(String)
- 불리언(boolean)
- 섬벌(Symbol)
- undefined
- null

그 외에는 모두 객체

## 3.1. 숫자타입

- 64비트 부동소수점 정밀도
- Infinity
-  -Infinity
-  NaN (Not a Number)

## 3.2. 문자열

- 작은 따옴표(')
- 큰 따옴표(")
- 백틱(backtick, `)


## 3.2.1. 템플릿 리터럴(`백틱으로 선언`)

ES6+부터 지원, ${} 내부에 변수 뿐만 아니라 표현식을 넣을 수 있음.
표현식: 평가 결과가 값

```javascript
const n = 10;
 const message = 'test'
 
 console.log(`상수 n의 값: ${n}. 상수 message의 값: ${megssage}`);
```

## 3.3 boolean

true, false

## 3.4. 심벌

immutable 원시 타입. 값이 중복이 안됨. ES6+

## 3.5. undefined

변수를 선언하고 값을 초기화하지 않는 경우 묵시적으로 할당되는 값.

## 3.6. null

의도적으로 변수에 값이 없음을 명시할 때 사용

## 3.7. 타입 검사
typeof 연산자 사용

## 3.8. rorcp

### 3.8.1. 객체 선언 및 사용

객체 리터럴('{}')로 객체 선언하기


```javascript
//빈 객체 선언
const obj = {}

//선언과 동시에 멤버 초기화
const obj = {
    member1: 'abc',
    member2: [1, 2, 3],
    member3: 10
}

obj.member1 // 'abc'
```

- 계산된 멤버 접근 연산자(comuted member access operator)
- 
```javascript
//멤버 추가하기
const obj = {}
obj['apple'] = '사과'
//추가한 멤버에 접근
obj['apple'] // '사과'
```

### 3.8.2. 배열

```javascript
const arr = []

```

바자스크립트 배열의 특징
- 객체임. 따라서 아무 값이나 넣을 수 있음(자바와 다름)


### 3.8.3. 날짜

Date 객체 사용


# 4. 제어문

## 4.1. 분기

```javascript
// 조건식: 평과 결과 값이 boolean(true or false)인 식(expression, expr).
if(조건식){
    코드
}
const a = 10

if (a > 5){
    console.log('a가 5보다 큼')
}
```


## 4.2. 반복

- for
- for-in
- for-of

### 4.2.1. for문

자바의 for와 동일함
```javascript
for(let i =0; i<10; i++){
    console.log(`${i+1}번째 출력.`)
}
```

### 4.2.2. for-in 문 
객체 `프로퍼티` 순회할 때 사용

```javascript
for(variable in object){
   // code
}
```

```javascript
const obj ={
    food: '감자',
    number: 10,
    arr: [1,2,3]
}

for(p in obj){
   console.log(obj[p])
}
```


### 4.2.3. for-of 문 

프로퍼티가 아닌 값을 순회할 때 사용

```javascript
for(value of obj){
   // code
}
```
```javascript
const obj =['감자',10,[1,2,3]]


for(value in obj){
   console.log(value)
}
```


# 5. 연산자

## 5.1. 비교 연산자

동등 비교 연산자(==)
- 좌항과 우항의 타입을 일치시킨 후 비교

일치 비교 연산자(===)
- 타입도 일치하고, 값도 일치하면 참

## 5.2. 지수 연산자

ES7+ 멱승 계산

```javascript
x ** y
```

## 5.3. 그 외

- new: 생성자 함수 호출
- delete: 프로퍼티 제거
- 'in': 멤버 검사
- ?.: 옵셔널 체이닝

ex) 자바스크립트
```javascript
obj?.size(); 
```
==자바
```java
if (obj!= null){
    obj.size()
};
```

//이름이 없는 변수
(매개변수) => {
    코드
}

자바 함수(메스드)와 다른점
- 식별자에 할당 가능(변수에 저장하는 것 처럼)
- 자바와 달리 인터페이스 선언이 필요 없음

이름이 있는 함수 만들기 예제
```javascript
function test1(a, b){
    return `${a}와 ${b}의 합은 ${a+b} 입니다.`
}

const resultMessage = test1 (1, 2)
console.log(resultMessage)
```

이름이 없는 함수 만들기 예제
```javascript
const aa = (a, b) => `${a}와 ${b}의 합은 ${a+b} 입니다.`

const resultMessage1 = aa (1, 2)
console.log(resultMessage1)
```

람다는 어디에 필요할까
- 콜백함수
- 핸들러


# 6.1. 디폴트 함수 파리미터(default function parameter)

```javascript
function test(a, b = 3, template = `${a}와 ${b}의 합은 ${a+b} 입니다.`){
    return template
}

console.log(test(1))
console.log(test(1,2))
```

익명함수 에서도 동일하게 사용 가능

```javascript
(a, b = 3, template = `${a}와 ${b}의 합은 ${a+b} 입니다.`
```

## 6.2. 메서드

객체 리터럴에 포함된 함수를 메서드라고 구분해서 부름

```javascript
const obj = {
    //코드
fn: function(){
    //코드
}
}

const obj5 = {
    name: 'hs',
    say: function() {
        console.log('뭔가 말함')
    }
}
obj5.say
```

## 6.3. 메서드의 this
this는 읽기 전용 값. 자신을 소유한 객체를 가리키는 값(함수를 소유한 멤버에 접근 할 수 있음)