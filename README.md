# manual-java
Develop study and job interview preparation

## INDEX
### [1.memo](https://github.com/jogilsang/manual-java/tree/master/1.memo)
### [2.book](https://github.com/jogilsang/manual-java/tree/master/2.book)
- [2.1.자바스카우터](https://github.com/jogilsang/manual-java/tree/master/2.book/2.1.자바스카우터)
- [2.2.자바의정석](https://github.com/jogilsang/manual-java/tree/master/2.book/2.2.자바의정석)
### [3.install](#3.install)

---

# Reference
## 1. 정적코드 분석도구
- [1.1 SpotBugs](https://spotbugs.github.io/).
- [1.2 FindBugs](http://findbugs.sourceforge.net/).
    - [1.2.1 소스코드 진단하기 #3 젠킨스 활용](https://chanztudio.tistory.com/41)
- [1.3 CheckStyle](https://checkstyle.sourceforge.io/).
- [1.4 PMD](https://pmd.github.io/).
- [1.5 Error Prone](https://github.com/google/error-prone/wiki/For-Developers).
- [1.6 sonarQube]()
    - [1.6.1 코드 품질 향상을 위한 지속적인 코드 인스펙션 SonarQube 소개](http://www.curvc.com/curvc/product/sonarsource/sonarqube)
    - [1.6.2 소나큐브 설치하기](https://dololgun.github.io/sonarqube/sonarqube/)


## 2. 통계자료
- [2.1. jetbrains 통계](https://www.jetbrains.com/lp/devecosystem-2020/)


## 3.install
### Amazon EC2
```bash
### java 파일 실행하기
eclipse로 만든거 git에 올리기
git으로 다운받기
bin,src 중에서 bin으로 들어가기
java -cp 패키지명.메인클래스

### jar 만들기 생성
sudo vi manifest.txt
(Main-Class: MainClass <--- main 함수 있는 클래스)

jar -cvmf manifest.txt [jar파일명] [클래스1] [클래스2] or 
jar -cvmf manifest.txt [jar파일명] *.class

java -jar 파일명.jar

출처: http://ra2kstar.tistory.com/125 [초보개발자 이야기.]
```










