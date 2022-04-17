
### Toast 메시지  
```
$ionicLoading.show({ template: 'Item Added!', noBackdrop: true, duration: 2000 });
```

## Angular vs ionic
```
localStorage
별도의 import 없이 바로 사용하면됨
```

### cordova 삭제 및 버전
```
cordova platform rm android
cordova -version
```

### Angular
```

npm install -g @angular/cli
ng serve --open --host 0.0.0.0 --disable-host-check


0. trouble Shooting
Question :
Your global Angular CLI version (9.1.1) is greater than your local
version (8.3.26). The local Angular CLI version is used.

Error: This version of CLI is only compatible with the Angular version but found instead

answer :
ng --version
npm install --save-dev @angular/cli@latest
ng --version
ng update

```

### Summery
튜토리얼, 코드 샘플 : 
https://ko.flyfishcourse.com/news-218.html

- Plugins
```
storage :
https://ionicframework.com/docs/v3/storage/

device : 
https://ionicframework.com/docs/v3/native/device/

long-press :  
https://www.npmjs.com/package/ionic-long-press/v/1.5.0  

```

### 팝업
- 페이지이동
```javascript
controllerModule.controller('FProductSaleSumCtrl', function ($scope, $state
```
- 커스텀 팝업
```javascript
            $scope.shopItemChoisePopup = $ionicPopup.alert({
                title: "조회 선택",
                template: ' \
                		<div class="selBtnBox row"> \
                            <div class="col"> \
                                <button class="sel1" ng-click="closeShopNItemSelectPopup(1)"> \
                                    <span>매장별</span>판매 조회 \
                                </button> \
                            </div> \
                            <div class="col"> \
                                <button class="sel2" ng-click="closeShopNItemSelectPopup(2)"> \
                                    <span>단품별</span>판매 조회 \
                                </button> \
                            </div> \
                        </div> \
                ',
                cssClass: 'customPopup',
                scope: $scope,
                okText : '취소'
            });

```


-----------------------------------------------------------------------------------------


안드로이드 9 이상 config 추가해줘야됨
```
1. root/config.xml
    <platform name="android">
        <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application" xmlns:android="http://schemas.android.com/apk/res/android">
            <application android:usesCleartextTraffic="true" />
            <application android:networkSecurityConfig="@xml/network_security_config" />
        </edit-config>
```


아이오닉 run
```
ionic cordova run android --prod
```

아이오닉 livereload
```
 ionic cordova run android -l
```

문서 해석 doc 해석
```
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        
        {
          params: {
            title: '조길상',
            date: '2020-02-26',
            userName: '조길상',
            roomName: '커뮤니티룸2',
            startTime: '15:00',
            endTime: '16:00',
            token: 'test'
          }
        }
        
```


파이어베이스 메세징 푸시 FCM Setting
```
src : 
https://ionicframework.com/docs/v3/native/fcm/

config.xml에서 패키지 명 변경
파이어베이스 사이트 들어가서, 패키지 명으로 프로젝트 만들고 json 다운
cordova의 root폴더에 집어넣는다.
ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated
npm install --save @ionic-native/fcm@4
토큰 처리
ionic cordova platform add android@8.0.0
ionic cordova build android
확인
```

cordova doc
```
3.0
var ref = window.open('url', '_blank', 'location=yes | hardwareback=no');

1.0
var url = "";
var opts = { toolbar: 'no', location: 'no', useWideViewPort: 'no', enableViewportScale: 'yes', hardwareback : 'no'};
window.open(url, '_blank', opts);
```

cordova url 인앱브라우저 inappbrowser window open
```
  var ref = window.open('url', '_blank', 'location=yes | hardwareback=no');
```

vscode extention
```
bookmarks
```

Ionic + Angular + Android
```
0.	정의
Ionic이란?
Cordova 기반 하이브리드 앱 개발 프레임워크

1.	Node.js 설치
https://nodejs.org/en/
올바르게 설치되었다면, CMD 창에서 npm -v와 node -v 명령어가 실행됩니다.

2.	Typescript 설치
npm install typescript -g

3.	Cordova와 ionic 설치
npm install -g @ionic/cli native-run cordova-res
npm install –g ionic cordova

4.	Angular 설치
npm install –g @angular/cli

5.	프로젝트 생성
ionic start myApp tabs --type=angular –capacitor

6.	프로젝트 폴더로 들어갑니다.
cd myApp

7.	프로젝트를 실행합니다.
ionic serve
ionic serve –lab (IOS, Android 두개의 화면을 동시에 볼수있습니다.)

5. JAVA 세팅
5.1 JDK를 다운받아, 설치합니다.
5.2 시스템 변수를 설정합니다. 
JAVA_HOME (EX : C:\java-13-openjdk\java-13-openjdk-13.0.1.9-2.windows.ojdkbuild.x86_64)
5.3 Path에 추가합니다.
%JAVA_HOME%\bin
(위로 이동 버튼으로 리스트 항목의 가장 위로 올립니다.)
5.4 올바르게 설정되었다면, CMD 창에서 java와 javac 명령어가 실      
행됩니다.



6. 안드로이드 세팅
1. 안드로이드 스튜디오를 설치합니다.
https://developer.android.com/studio/?hl=ko

2. 시스템 변수에서 새롭게 추가합니다.
ANDROID_SDK_ROOT
C:\Users\(사용자 이름)\AppData\Local\Android\Sdk
3. Path에 추가합니다.
%ANDROID_SDK_ROOT%\tools\bin
%ANDROID_SDK_ROOT%\platform-tools
%ANDROID_SDK_ROOT%\emulator

4. 올바르게 설정됬다면, CMD창에서 adb 명령어가 실행됩니다.
5. AVD Manager을 설정합니다.
6. ionic 프로젝트 폴더의 platforms/android 를 open합니다.
7. 프로젝트를 안드로이드 스튜디오로 build 합니다.
8. 실행을 확인합니다. 

ionic build android
ionic cordova prepare android
ionic cordova platform add android
ionic cordova emulate android
Ionic cordova run android
```

```
npm uninstall -g ionic --save
npm uninstall -g ionic@3.20.0 --save
npm uninstall -g ionic --save
npm uninstall -g ionic@5.4.15 --save
npm uninstall -g ionic --save
npm cache clean -f
재시작
npm install g ionic@3.20.0
```

ionic3
```
coreybutler/nvm-windows
release 1.1.6 install

nvm install 8.11.3
nvm install 0.12.7

nvm use 8.11.3

npm install -g cordova@8.0.0
npm install -g ionic@3.20.0
```

ionic1
```
- setting
as-is
ionic 3.9.1
node 8.11.3
cordova 8.0.0

to-be
ionic 1.7.14
node 4.2.4
cordova 6.5.0

- environment
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_241;
GRADLE_HOME = C:\Gradle\gradle-6.3\bin

%JAVA_HOME%\bin

- command
cordova platform add android@6.2.1
cordova build --debug android
cordova build --release android
cordova emulate android

-- error
Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.
Looked here: C:\Users\cho_gilsang\AppData\Local\Android\sdk\tools\templates\gradle\wrapper
ERROR: Cannot add task 'wrapper' as a task with that name already exists.

answer : cordova platform add android@6.2.1

Error: Could not find an installed version of Gradle either in Android Studio,
or on your system to install the gradle wrapper. Please include gradle
in your path, or install Android Studio

answer : install the gradle, and setting path

JAVA_HOME is set to an invalid directory:

answer : java_path setting

cli :
ionic start EBGSEntryCheck blank

```

### Angular
1. 단방향 데이터 바인딩인 이유는?
```
양방향 데이터 바인딩의 경우, 렌더링 호출 이슈가 있을수있음
```
### RxJS
```
RxJS?
Observable을 사용해서 비동기 및 이벤트 기반 프로그램을 작성하기 위한 라이브러리
비동기에 대한 솔루션
리액트 프로그래밍과 함수형 프로그래밍 철학의 교집합

프로그램 오류란 사용자의 입력에 따라 프로그램이 예상하는 결과를 얻지 못하는 것

SPA : 페이지 하나로 이루어진 웹 어플리케이션

입력 오류 해결
동기, 비동기 데이터를 Observable로 일원화하는것

상태 오류 해결
Observable은 read-only로 단방향

로직 오류 해결
반복,분기,변수제거를 위해 함수형 프로그래밍 사용

Observable 만들기
array -> from -> pipe -> fillfrom???

오퍼레이터 (Observable 실험 및 조작)
Observable은 데이터를 observer가 subsribe하게되면 전달한다.
Obserber는 Observable에서 전달하는 데이터를 소비하는 주체로, next,error,complete 세 가지 메소드를 가지고있음

of : 각각 단일 데이터 값을 전달, observable
range : 범위 내 값
fromEvent : 브라우저에서 발생하는 이벤트 받아옴
from : 모든 데이터
promise : 성공(resolve)시 데이터를 전달, complete 호출
실패(reject)시 자동구독해제
interval(1000) 1초마다 호출

promise와 observer의 공통점
push방식
에러처리 지연

promise와 observer의 차이점
지연X, 취소지원X, 딱 한번 호출, 데이터 1개만 전달가능해


```

아이오닉 아이콘,스플래시 변경
```
1. 이미지 만들어서 resources에 넣어두기
ionic resource --icon
min 192
1024

ionic resource --splash
1200 x 1200
2208 x 2208

2.
ionic cordova resources
아이디/패스워드 입력
ionic cordova platform rm android
ionic cordova platform add android
```

아이오닉 무료테마
```
달력 :
https://market.ionicframework.com/starters/calendar
1. download
2. pages, pipes, components 복사해서, 붙여넣기
3. app.module.ts에 선언하기(페이지,컴포넌트,파이프)
4. cmd창으로 모듈설치(Package.json에서 확인가능, 또는 선언?)
npm install customcal --save
npm install moment --save


기본디자인 :
https://market.ionicframework.com/themes/ionic-material-design
```

아이오닉 색
```html
 <ion-toolbar color='main'>
```

아이오닉 설정화면 만들기
```html
  <!-- 리스트 -->
  <ion-list>
    <ion-item ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">
      <ion-icon [name]="item.icon" item-start></ion-icon>
      <!-- 아이템 아이콘 -->
      <ion-label>{{item.title}}</ion-label>
      <!-- 아이템 설명 -->
      <div class="item-note" item-end>{{item.note}}</div>
      <!-- 아이템 체크 -->
      <ion-toggle *ngIf = "item.note === ''" checked='true'></ion-toggle>
    </ion-item>
  </ion-list>
```

아이오닉 정렬하기
```html
     <div class='alarm-check' item-end>알람 체크</div>
```

아이오닉 scss
```html

 <div class='alarm-check'style="color: #42A5DE;" item-end>알람 체크</div>

page-home {
    
    .alarm-check{
    background-color:yellow;
 }

}

    .item-text {
        float:left;
        width:35%;
        font-size: small;
    }

font-size: medium | xx-small | x-small | small | large | x-large | xx-large | smaller | larger | length | initial | inherit

```

아이오닉 타이틀 변경
```
<ion-header>
  <ion-navbar color='main'>
    <ion-title>{{date}}</ion-title>
  </ion-navbar>
</ion-header>
```

아이오닉 린트 lint eslint
```
1. ESLint 설치
2. nodejs 설치, https://nodejs.org/
3. npm install -g eslint
4. npm init -> enter enter....
5. eslint --init
6. custom화 한뒤 , https://eslint.org/docs/rules/ 참조
-> 타입스크립트는 안되는듯...?
```

아이오닉
```
// 프로바이더 생성
ionic g provider openApiService

// import
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

// app.module.ts, providers에 추가
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],


// 서비스에 변수선언
observable: Observable<Object>;

// 서비스에 코드 추가
    return new Promise(resolve => {
      this.observable = this.http.get(url);
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {

      this.dataToString = JSON.stringify(data); // 문자열 변환
      console.log(this.dataToString);

      this.data = data // 데이터 받기

      this.setItem(this.data); // JSON 데이터 넘김

    });

 // 서비스 선언
 private service: any;

  // 서비스 받기
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public openApiServiceProvider: OpenApiServiceProvider,
    private geolocation: Geolocation
  ) 
this.service = openApiServiceProvider;

// HTML을 통해 서비스 value 호출
// 모든 HTML에서 접근가능
[(ngModel)]="service.items[0]"
```

http api test
```
http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=e9a29b293e27414b333b8e7c47663cc7
```

http GET방식
```
// 서비스에 변수선언
observable: Observable<Object>;

// 서비스에 코드 추가
    return new Promise(resolve => {
      this.observable = this.http.get(url);
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {

      this.dataToString = JSON.stringify(data); // 문자열 변환
      console.log(this.dataToString);

      this.data = data // 데이터 받기

      this.setItem(this.data); // JSON 데이터 넘김

    });
```

http POST 방식
```
1. 방식
this.http.post('https://some.domain', 
{ 
  cardToken : token,
  amount, 500
}, 
{
  headers: { 'Content-Type': 'application/json' }
})
.then(data => {
  console.log(data.data);
}).catch(error => {
  console.log(error.status);
});

2. 
this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
    headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
    params: new HttpParams().set('id', '3'),
  })
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  });
  
  3.
  
  post() {

    let url = 'http://15.165.187.77:8080/res/insert';

    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    let body = {
      title: "test",
      date: "2020-03-01",
      userName: "jogilsang",
      roomName: "커뮤니티룸3",
      sTime: "12:00",
      eTime: "13:00"
    };

    return new Promise(resolve => {
      this.observable = this.http.post(url,
        body,
        { headers: headers }
      );
      this.observable.subscribe(data => {
        resolve(data);
      });
    }).then(data => {

      this.dataToString = JSON.stringify(data); // 문자열 변환
      this.data = data // 데이터 받기
      console.log(this.data);
    }).catch(error => {
      console.log(error.status);
    });

  }
  
  4.
    post2() {

    let url = 'http://15.165.187.77:8080/res/insert';

    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    let data = {
      title: "test",
      date: "2020-03-01",
      userName: "jogilsang",
      roomName: "커뮤니티룸3",
      sTime: "12:00",
      eTime: "13:00"
    };

      return new Promise((resolve, reject) => {
        this.http.post(url, JSON.stringify(data))
          .subscribe(res => {
            resolve(res);
            console.log(res);
          }, (err) => {
            reject(err);
            console.log(err);
          });
      });
    }
```

footer 처리
```
footer.html -> footer-ebg.html
footerCtrl.js -> footerCtrlEbg.js
footer-directive.js -> footer-ebg-directive.js
index.html (footerCtrl.js -> footerCtrlEbg.js)
index.html (footer-directive -> footer-ebg-directive)

barcodeHide -> videoHide 변경
현재 화면이 모바일 고객조사 도구면, hidden 처리
기능은 footerCtrl에 

```

### swipe
```
manual : 
on-swipe
on-swipe-up
on-swipe-right
on-swipe-down
on-swipe-left

usage : 
<ion-list show-delete="false" can-swipe="true" swipe-direction="both">
<ion-item on-swipe-left="doSomething()" on-swipe="fn()" 
    <ion-option-button on-swipe="fn()">
    </ion-option-button>

link : 
https://ionicframework.com/docs/v1/api/directive/onSwipe/
```



