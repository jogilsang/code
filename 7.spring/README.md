# manual-spring
for me


### 
```
cmd
netstat ao | find "8080"
```

### maven
```
mvn package
mvn spring-boot:run
```

### 설치
spring2 + intellij(coummunity)
https://daddyprogrammer.org/post/19/spring-boot2-start-intellij/

spring5 + intellij(coummunity)
https://www.bsidesoft.com/?p=6926

### spring5
시작
```
cd test
gradlew 유닉스용 실행 스크립트
컴파일이나 빌드 호환성 문제를 gradlew를 통해 해결

gradlew bootrun
명령으로 실행

localhost:8080 접속
```

### spring5 GET,POST
```
https://shlee0882.tistory.com/249?category=809647
```

### REST API test
```
postman

Talend API Tester - Free Edition
https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=ko
```

### 설치요약
1. intellij 커뮤니티 설치
2. gradle 수정
```
plugins {
    id 'org.springframework.boot' version '2.1.4.RELEASE'
    id 'java'
}
 
apply plugin: 'io.spring.dependency-management'
 
group = 'com.rest'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '9'
 
configurations {
    compileOnly {
        extendsFrom annotationProcessor
    }
}
 
repositories {
    mavenCentral()
}
 
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-freemarker'
    implementation 'org.springframework.boot:spring-boot-starter-web'
    compileOnly 'org.projectlombok:lombok'
    runtimeOnly 'com.h2database:h2'
    runtimeOnly 'mysql:mysql-connector-java'
    annotationProcessor 'org.projectlombok:lombok'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

Lombok
```
settings - plugns - lombok 설치
settings - annotation processeor - enable annotation processor
```


### swagger
```

https://memostack.tistory.com/17
https://memostack.tistory.com/7
```


### 정리필요
```
스프링의 핵심원리
객체지향의 원리와 적용점

어플리케이션 개발 재미상승

스프링이 제공하는 핵심가치 원리

IOC : 제어의 역전
DI : 의존성 주입
SRP OCP DIP 객체지향설계의 원리

스프링의 핵심가치
객체 지향 프로그래밍

왜 스프링이 만들어졌을가?
문제를 해결해나감

단순 레퍼런스 문서 설명X
Why Spring ?
객체 지향 설계를 고민하는 개발자로 성장

Enterprise Java Beans
EJB
=스프링 JPA 등 합쳐놓은 것
Entity Bean
JPA = ORM 기술. 자바객체를 DB에 넣었다 꺼내는기술

EJB에 의존적으로 짜야되기때문에, 시간이 오래걸렸음

로드 존슨. 스프링만듬

EJB의 엔티티빈 기술을대체 -> 하이버네이트 (겝인케이)
-> JPA (표준 인터페이스)
구현체들은 하이버네이트, 이클립스 링크, 기타 이것들이
JPA 구현체들

유겐 휠러, 얀 카로프가 오픈소스 프로젝트 제안

스프링이라는 이름은 얀카로프가 지음

전통적인 J2EE(EJB)라는 겨울을 넘어 새로운 시작이라는 뜻

자바도 논블럭킹 형식의 개발이 가능. 리엑티브 프로그래밍

스프링 부트는 스프링 프레임워크와 별개로 사용할 수 있는 것ㄷ이 아님

스프링이란???
스프링 DI 컨테이너 기술
스프링 프레임워크
스프링 부트, 프레임워크 등을 모두 포함한 생태계

핵심 컨셉, 개념 ???
스프링은 좋은 객체 지향 어플리케이션을
개발할 수 있게 도와주는 자바 프레임워크

-----------------------------------------------
개발을 하면서~~
다형성, OCP, DIP 적용이 잘 되었는지 ???

회원 저장소를 어떡해할지 모르겠다
정해지지않았으면, 어떡해야하나~~?
 - 메모리 회원 저장소
 - DB회원저장소
 - 외부시스템 연동 회원저장소

역활과 구현은 생각하고, 구현을 변경하면된다
역활과 구현을 분리하면, 자유롭게 구현객체를 조립할수있다

클래스 다이어그램 : 
서버가 실행되지않고, 클라이언트가 실제로 사용하지않아도
클래스와 인터페이스
회원서비스 = MemberService (인터페이스)
회원저장소 = MemberRepository (인터페이스)

객체 다이어그램
서버가 실행되고, 클라이언트가 실제로 사용되면서
인스턴스 끼리 참조되는 것

플랫패키지
컴팩트 미들 패키지

클래스 다이어그램은 정적이고
객체 다이어그램은 동적이다.

psvm -> public static void main
ctrl + alt + v -> 변수자동완성

        //given
        
        //when
        
        //then

DIP를 위반한다
추상화에도 의존하고, 구체화에도 의존한다

클라이언트 = 스프링 컨트롤러 또는 메인

역활과 구현이 한눈에 보이는가

역활과 구현을 충실하게 분리했다
다형성도 활용하고, 인터페이스와 구현객체를 분리했따
OCP,DIP 같은 객체지향 설계원칙을 준수했다

AppConfig
애플리케이션의 전체 동작 방식을 구성 및 설정

생성자 주입이라고 한다

ctrl + e : 과거히스토리

제어의 역전(IoC, Inversion Of Control)
구현 객체가 프로그램의 제어 흐름을 스스로 조종
하지않고, 구현 객체는 자신의 로직을 실행하는 역활
프로그램의 제어흐름은 AppConfig가 가져감
프로그램의 흐름을 직접 제어하는것이 아니라,
외부에서 관리하는 것이 제어의 역전(IoC)라고 한다.

프레임워크 vs 라이브러리

작성한 코드를 제어하고, 대신 실행하는 것이 프레임워크
(Junit)
@Test 메소드를 만들었을때
실행과 제어권은 Junit이라는 테스트 프레임워크가 가져감
Before, each를 실행하고 @test를 실행하는 라이프사이클이있고
내가 작성한 @Test 코드를 콜백으로 가져온다.
내가 작성한 코드가 직접 제어의 흐름을 담당한다면, 라이브러리

의존관계는 정적인 클래스 의존관계와
실행시점에 결정되는 동적인 객체 의존관계
둘을 분리해서 생각해야한다
diagram - show diagram
show dependency

정적인 의존관계(클래스 다이어그램)는 어플리케이션을 실행시키지않아도 알수있음
상속, 구현은 의존을 함

동적인 객체 인스턴스 의존 관계
객체 인스턴스를 생성하고, 그 참조 값을 전달해서 연결
외부에서 실제 구현 객체를 생성하고, 클라이언트에 전달해서
클라이언트와 서버의 실제 의존관계가 연결되는 것
어플리케이션 코드를 손대지 않는 것



알튜브




```
