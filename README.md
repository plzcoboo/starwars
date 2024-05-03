## [초기화면]
- 접속시 갤러리 형식 화면이 나타납니다.

| 초기화면 |
|----------|
<img src="./public/readme/first.jpg">

- 배포 URL : https://aquamarine-lily-2fe788.netlify.app

## 프로젝트 소개

- 평소 좋아하는 테마를 정해 REACT 를 이용하여 이미지 갤러리를 만들었습니다.

## 개발 환경

- Front : HTML, CSS Module, React
- Back-end : 로컬 API 사용
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : Netlify


## React, styled-component

- React
    - 로컬 API를 통해 자바스크립트 메서드를 통해 화면에 출력하는 연습을 하기 좋았습니다.

- CSS Module
    - 컴포넌트 내부에서 클래스 이름을 자동으로 고유화하여 충돌을 방지하는 점이 마음에 들었습니다.
    - 기존의 CSS 작성 방식을 그대로 사용할 수 있으므로, 별도의 학습이 필요하지 않아 사용성이 좋았습니다.

## 개발 기간

- 2일~3일 소요

## 프로젝트 작업 순서
1. 자료조사 및 데이터 파일 배열속 객체형식으로 데이터 제작
2. 디자인 계획 및 마크업
3. HTML  / CSS Module / 순수 React 사용


## 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜mainData.js
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜reset.css
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Foot
 ┃ ┃ ┣ 📜Foot.jsx
 ┃ ┃ ┗ 📜Foot.module.scss
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Header.module.scss
 ┃ ┃ ┗ 📜NavBar.jsx
 ┃ ┗ 📜Layout.jsx
 ┣ 📂pages
 ┃ ┣ 📂JEDI_movie
 ┃ ┃ ┣ 📜List.scss
 ┃ ┃ ┣ 📜ListForm.jsx
 ┃ ┃ ┣ 📜ListForm.scss
 ┃ ┃ ┣ 📜MoiveList.jsx
 ┃ ┃ ┣ 📜TableItem.jsx
 ┃ ┃ ┣ 📜TableList.jsx
 ┃ ┃ ┗ 📜TableList.scss
 ┃ ┗ 📂JEDI_people
 ┃ ┃ ┣ 📂NavSlider
 ┃ ┃ ┃ ┣ 📜NavItem.jsx
 ┃ ┃ ┃ ┣ 📜NavSlider.jsx
 ┃ ┃ ┃ ┗ 📜NavSlider.module.scss
 ┃ ┃ ┣ 📂PeopleCon
 ┃ ┃ ┃ ┣ 📂Gallery
 ┃ ┃ ┃ ┃ ┣ 📜Gallery.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Gallery.module.scss
 ┃ ┃ ┃ ┃ ┗ 📜GalleryNavItem.jsx
 ┃ ┃ ┃ ┣ 📂ProfileBox
 ┃ ┃ ┃ ┃ ┣ 📂Films
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Films.jsx
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FilmsItem.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜FlimsItem.module.scss
 ┃ ┃ ┃ ┃ ┣ 📂HomeWorld
 ┃ ┃ ┃ ┃ ┃ ┣ 📜HomeWorld.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HomeWorld.module.scss
 ┃ ┃ ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Profile.jsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Profile.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜ProfileBox.jsx
 ┃ ┃ ┃ ┃ ┣ 📜ProfileBox.module.scss
 ┃ ┃ ┃ ┃ ┣ 📜ProfileMenu.jsx
 ┃ ┃ ┃ ┃ ┗ 📜ProfileMenu.module.scss
 ┃ ┃ ┃ ┣ 📜PeopleCon.jsx
 ┃ ┃ ┃ ┗ 📜PeopleCon.module.scss
 ┃ ┃ ┣ 📂Sub
 ┃ ┃ ┃ ┣ 📜sub.module.scss
 ┃ ┃ ┃ ┗ 📜Sub_people.jsx
 ┃ ┃ ┗ 📂SubMenu
 ┃ ┃ ┃ ┣ 📜SubMenu.jsx
 ┃ ┃ ┃ ┗ 📜SubMenu.module.scss
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```

## 프로젝트 기능 구현

### 1) 탭 방식 메뉴

* 데이터 내 'All character','Main character','Sub character' 정보로 탭기능
* 카테고리 해당 첫번째 캐릭터가 Gallery 나오도록 구현
* 카테고리 변경시 css 효과 적용
<img src="./public/readme/All_readme.gif">


### 2) 상단 네비게이션

* 함수(map) 을 통한 네비게이션 바 출력
* 상단 인물 클릭시 각각 해당하는 인물로 갤러리 이미지 변경
* NEXT PREV 를 통한 인물변경 기능
<img src="./public/readme/Nav_readme.gif">


### 3) 갤러리

* 갤러리 내부 하단의 이미지 클릭시 해당 이미지로 변경처리 
* 오른쪽 상단에 탭기능 추가로 해당하는 정보 출력
<img src="./public/readme/Gallery_readme.gif">




