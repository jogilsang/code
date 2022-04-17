# manual-vue
## INDEX (목차)
### - [My Posting](#p0)
### - [Reference](#p1)
### - [Editor-online](#p2)
### - [Editor-vscode](#p3)
### - [Tools](#p4)
### - [What](#p5)
### - [설치(Install)](#p6)
### - [Plugin](#p7)
---
## Contents (본문)
### My Posting
#### p0
- [Vue.js - json 데이터를 파일로 가져오는 방법](https://blog.naver.com/jogilsang/222504849580)
### Reference
#### p1
- Study
    - [codelabs-vue](https://codelabs-vue.web.app/)
- Resource
    - [vuejsexamples](https://vuejsexamples.com/)
    - [github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue)
    - [Vue Curated](https://curated.vuejs.org)
    - [Element](https://element.eleme.io)
    - [OnsenUI](https://onsen.io)
    - [surveyjs](https://surveyjs.io/Overview/Library) (X)
        - [surveyjs-helloworld](https://lovemewithoutall.github.io/it/surveyjs-vue/)
        - [surveyjs_vue_quickstart](https://github.com/surveyjs/surveyjs_vue_quickstart)
    - [vue-plugin-boilerplate](https://github.com/kazupon/vue-plugin-boilerplate)
    - [Bootstrap Forms](https://mdbootstrap.com/docs/standard/forms/overview/)
- Template
    - [websanova/vue-auth](https://github.com/websanova/vue-auth)
    - [creativetimofficial/vue-paper-dashboard](https://github.com/creativetimofficial/vue-paper-dashboard)

### Editor - online
#### p2
- https://codepen.io
- https://jsfiddle.net
- https://codesandbox.io

### Editor - vscode
#### p3
```
Extentions
- vetur
- html css support
- vue 3 snippets
```

### Tools
#### p4
- [Vue DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related?hl=ko&)

### What
#### p5
```js
- 구조는 자바스크립트 데이터
- 데이터 지향(Data Driven)
- 템플릿과 로직의 연결은 v-로 시작하는 'Directive' 기능이용
- 배치할 요소와 애플리케이션을 연결하는 것을 'Mount'라고 함
- 데이터와 렌더링을 동기화 하는 구조를 'Data binding'라고 함
- '컴포넌트'는 기능별로 JS와 Templete을 묶은세트. 'Vuex'와 'Vue Router'로 관리가능
- vue.js 확장 프레임워크로 'Nuxt.js'와 'VuePress'가 있음
- 배포할경우 'vue.js'가 아닌 'vue.min.js'로 배포하기
- 스탠드얼론 버전은 CDN주소를 통해 script 태그로 파일을 읽어들이기만 하면 사용할수있다.
```

### 설치(Install)
#### p6
#### Install - axios
`http 요청`
```javascript

1. npm install --save axios
2. main.js
// http request 추가
import axios from 'axios'
Vue.prototype.$http = axios

3.
  const baseURI = 'https://......';
  this.$http.get(`${baseURI}/posts`)
  .then((result) => {
    console.log(result)
    this.posts = result.data
  })
 
 4. CORS 에러해결
 https://blog.naver.com/jogilsang/221930754822
```
- get
  ```
  this.$http.get('/api/data') .then(res => { // 불러온 값을 Console에 뿌려줍니다. console.log(res.data) })
  ```
- post
  ```
  this.$http.post('/api/data', {title: "test"}) .then(res => { console.log(res.data) })
  ```
- put
  ```
  this.$http.put(`${baseURI}/api/setPassword`, {pw: "change"}).then(res => { 
    // 불러온 값을 Console에 뿌려줍니다. 
   console.log(res.data) 
   });
  ```

#### Install - surveyjs
```javascript
npm install --save survey-vue
npm install --save survey-creator
npm install --save surveyjs-widgets
```
#### Install - vuex
```javascript
1. cmd 창
npm install --save vuex-persistedstate
npm install --save vuex

2. main.js
import store from "vuex";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```
#### Install - nvm
```
nvm install 14.17.5
nvm use 14.17.5
npm i -g @vue/cli
npm i -g @vue/cli-init
```
#### Install - @vue/cli
```
1. node.js latest/stable 설치
2. npm install -g @vue/cli
3. vue create 프로젝트명
   - vue3 선택
4. npm run serve
```
#### Install - @vue/cli-init and use webpack
```
npm i -g @vue/cli-init
vue init webpack my-app
cd my-app
npm install
```
```
C:\git\manual-vue\1.code\1.2.project\helloworld>vue init webpack my-app

? Project name my-app
? Project description A Vue.js project
? Author jogilsang <jogilsang@gmail.com>
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

vue-cli · Generated "my-app".
```

```java
npm run dev // 개발서버 실행
npm run build // dist 폴더 생성 -> 호스팅 서버 업로드
```

![image](https://user-images.githubusercontent.com/20831981/129505736-db914b2e-39b7-4620-bd5b-8540b0beda7b.png)


### Plugin
#### p7
##### - axios
```js
vue init webpack axios-example
npm install --save axios vue-axios
```
