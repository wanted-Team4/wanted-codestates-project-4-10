# 🔎 휴먼스케이프

검색어 추천 API를 이용한 검색창을 구현한 프로젝트입니다.

### 📌 &nbsp;[Team4의 과제 확인하러 가기](https://loving-dijkstra-b74442.netlify.app/)

### <br/>

###

## 🔎 View

### <br/>

###

## 🔎 Q&A

### 구현 방법과 이유

기업 측에서 제시한 스택인 Javascript, React, Redux를 사용해 과제를 구현하였고, localStorage와 debouncing으로 API 호출 최적화를 해주었습니다.


### 어려웠던 점

과제 내용에도 제시되어있는 내용으로, 반복적인 API 호출로 느려지는 렌더링을 최적화 시키는 작업을 할 때 많은 고민을 했던 것 같습니다.

### <br/>

###

## 🔎 Implement

### Stack

`Javascript` `React` `Redux` `Styled-Components`

### Features

- [X] 검색 영역 UI
- [X] 검색 시 추천 검색어 창 구현
- [X] Redux 상태 관리
- [X] localStorage로 API 호출 최적화
- [X] 웹 배포

### <br/>

###

## 🔎 Directory

```
├── public/
├── src/
│   ├── action/                  - reducer action components
│   ├── components/              - page components
│   ├── pages/                   - routed pages
│   ├── reducers/                - redux reducer 구현
│   └── store/                   - reducer 연결
│
├── App.js                       - page routing
├── index.js                     - entry point
├── README.md                    - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json                 - 사용 package 목록
```

### <br/>

###

## 🔎 Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/wanted-Team4/wanted-codestates-project-4-10.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `start` the project,

```
$ npm start
```

4. `Setting` prettier,

```
$ npx prettier --write .
```

### Environment Variable

```
REACT_APP_SEARCH_API=
```

### Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        프로젝트 시작        |
| :sparkles: |      Feat      |      새로운 기능 추가       |
|   :bug:    |      Fix       |          버그 수정          |
| :recycle:  |    Refactor    |        코드 리팩터링        |
| :lipstick: |     Style      |   스타일 추가 및 업데이트   |
| :package:  |     Chore      |   패키지 추가 및 업데이트   |
|  :books:   |      Docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

###

