### [초기화면]
- 접속시 갤러리 형식 화면이 나타납니다.

| 초기화면 |
|----------|
<img src="./public/readme/first.jpg">

- 배포 URL : https://plzcoboo.github.io/starwars/dist

## 프로젝트 소개

- 평소 좋아하는 테마를 정해 REACT 를 이용하여 이미지 갤러리를 만들었습니다.

## 1. 개발 환경

- Front : HTML, React, styled-components
- Back-end : 로컬 API 사용
- 버전 및 이슈관리 : Github
- 서비스 배포 환경 : github pages


### React, styled-component

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.

- styled-component
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.


## 3. 프로젝트 구조

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

### 개발 기간

- 2일~3일 소요

## 기능

## 프로젝트 주요 기능
1. 부모요소에서 프롭스(props) 전달을 통한 데이터 화면출력
2. 함수(map)를 통해 CSS 효과 적용을 위한 객체 데이터 변경 
3. 함수(find)를 통해 데이터 내부 id와 일치하는 데이터를 이용해 화면변경
4. useEffect 사용으로 특정한 값이 변경될때마다 화면에 반영되도록 되도록 순서를 부여
5.&& 연산자 통해 카테고리 탭 기능 구현

## 프로젝트 작업 순서
1. 자료조사 및 데이터 파일 배열속 객체형식으로 데이터 제작
2. 디자인 계획 및 마크업
3. HTML  / CSS Module / 순수 React 사용

# 프로젝트 기능 구현

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




