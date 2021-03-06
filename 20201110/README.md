# 1. form

사용자 입력을 받는 부분

<태그 속성 = 값>

- method : HTTP method
 - GET
 - POST
 - DELETE
 - PUT
 - HEAD
 - TRACE
 - CONNECT
 - OPTIONS
- name: 폼 이름. 폼 구분을 위한 이름
- action: URI (i.e. '/path/to/file')
- target


# 쉘(명령 프롬프트, bash 등)

## 1. 디렉토리

- cd
   - .: 현재디렉토리
   - ..: 상위 디렉토리

```bash
cd [절대경로]
cd /path/to/file # 이 경로로 이동
cd [상대겨올]
cd java #현재 디렉토리에 있는 java디렉토리로 이동
```

상대경로
- '[현재 디렉토리 위치]' + [상대경로디렉토리]

## 1. 디렉토리 출력

윈도우 
 - dir
리눅스/맥
 - li

# 3. CSS

Cascading Style Sheet

- 기기별 스타일 적용 가능
- html 문서와 별개로 스타일 지정 가능
- 버전 관리


# 4. CSS 기본 구조

```html
선택지 {
    스타일_속성: 값;
    스타일_속성: 값;
    스타일_속성: 값;
    스타일_속성: 값;
}
```

선택자 - 태그를 선택하는 방법들에 대한 것 
선택자로 선택할 수 있는 것
- 태그를 직접 선택
- 클래스 이름
- id
- 특수한 선택자

# 5. 스타일 시트 적용하는 3가지 방법

- 문서 내부 (style 태그)
- 문서 외부 별도로(css 파일 임포트)
- 인라인 스타일(태그에 직접 스타일 지정)

## 5.1. 문서 내부
```html
<p style="background-color: black">
뭔가 있음
<p>
```

## 5.3.  문서 외부에

```html
<link href= "pat/to/css/file" rel="stylesheet" type="text/css">
```

# 6. 기본 선택자

- *: 전체를 선택
- 태그: 해당 태그를 선택
- 클래스: 해당 클래스

## 6.1. 전체 선택자
## 6.2. 태그 선택자
## 6.3. 클래스 선택자
## 6.4. 아이디 선택자

# 7. 스타일 적용 기준

- 우선순위
- 상속

## 7.1. 우선순위

- 중요도
- 명시도
- 선언순서

## 7.1.1. 중요도

- 사용자 스타일 시트
- 중요 스타일 (!important)
- 스타일(CSS)
- 브라우저 스타일 시트

## 7.2.2 명시도

1. !important
2. 인라인 선택자 (태그에 직접 지정)
3. 아이디 선택자
4. 클래스/속성/강상 선택자
5. 태그 선택자(태그 직접 지정)
6. 전체 선택자(*)
7. 상위 요소에 의해 선택된 속성


# 8. 연결자 (combinators)

- 후손 선택자
- 자손 선택자
- 인접 형제 선택자
- 형제 선택자

## 8.1. 후손 선택자

```html
상위요소 후손
```

## 8.2. 자손 선택자

```html
부모요소 > 자식 요소
```

## 8.3. 자손 선택자

```html
형제 + 인접형제
```

## 8.4. 형제 선택자

```html
형제 ~ 인접형제
```

# 9. 속성 선택자


## 9.1. 속성 선택자

```html
a[속성이름]{ 스타일 }
```

## 9.2. [속성명=값] 선택자

```html
a[속성이름]{ 스타일 }
```

## 9.3. [속성명|=값]

이 값이 포함되면 선택

## 9.4. [속성명^=값]

이 값이 시작하면 선택

## 9.5. [속성명$=값]

이 값이 끝나면 선택


# 10. 그 외 선택자

가상 클래스, 가상 요소

## 10.1. 동작에 따른 사상클래스

- :link
- :visited
- :hover - 마우스가 올려져 있을 때
- :active - 마우스가 클릭되었을 때
- :focus 

## 10.2. 태그의 상태에 따른 가상 클래스

- :enabled - 활성화 된 상태 
- :disable - 비활성화 
- :checked - 체크된 상태

## 10.3. 구조 가상 클래스

- :root - 문서 전체
- a:not - a가 아니면 적용
- :nth-child(n) 
 - 2n-1, odd
 - 2n, even

https://fonts.google.com/
폰트 사이트