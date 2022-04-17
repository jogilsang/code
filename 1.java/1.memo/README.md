# java

## Reference
[oracle-java8-docs](https://docs.oracle.com/javase/8/docs/)

## INDEX
- ### [init](#-%20init)
- ### [setting](#-%20setting)
- ### [build](#-%20build)
- ### [contents](#-%20contents)
- ### [주석(comment)](#-%20comment)
- ### [etc](#-%20etc)

---

### - init
```java

public class Main {
    // psvm
    public static void main(String[] args) {
            System.out.println("Hello World!");
    }
}
```

### - setting
```
*** 환경변수 설정 후 재부팅

JAVA_HOME
C:\PROGRA~1\Java\JDK18~1.0_1

JAVA_OPTIONS
-Xmx512M -Xmx512M

CLASSPATH
%JAVA_HOME%\lib;.
```

### build
```java
javac Hello.java -encoding utf-8
java Hello

*** 패키지 이름은 없어야함
*** javac -encoding UTF-8 -g:none -Xlint:deprecation FILENAME
```

### - contents
- 메모장을 사용할수있다
- 기타 작성도구로 에디트 플러스, 이클립스 등이 있다
- 유사한 언어로 C++ , C# 등이 있다. 모두 객체지향 언어이다.
- 배워도 객체지향이 뭔지 모르겠는게 함정
- main class와 *.java의 이름이 같아야한다.
- 운영체제에 관계없이 코드가 같아도 똑같은 기능을 구현한다
- 설치하는대 시간이 얼마걸리지않는다. 진짜 별로 안걸린다.
- 처음에 path 설정이 프로그래밍을 처음 시작하는 사람에게 버거워서 진입장벽이 될수있다.
- 클래스 내에 모든 명령어가 존재해야 하며, method는 외부에 독립적으로 존재할수업다.
- C,C++ 에서 쓰던 goto문 을 쓸 수 없다. 사실 goto문이 뭔지도 모르겠다.
- 책 종류가 많고, 다른거보다 두껍다
- 클래스(class) 라는 개념 단위가 모여서 설계되며,
   메모리에 올라가게 되면 인스턴스(instance) 혹은 객체(object) 라고한다.
- 생성자는 반환형이 없으며, public으로 선언되어야 자바가상머신(jvm)이 호출할수있다.
- //( 확장자명이 java 여야 하며, main class 이름이 i_world 이기때문에 파일이름도 i_world 여야한다)
- -메모리관리
```
heap : 인스턴스
stack : 메소드,지역변수
```

---


---

---


### - Coment
```java
expected : <> but was : <>    

Init
@author
@copyright
@license
@version
@see
@see
@todo 
@link 

Method
@param
@return

```

### - etc
```Java
-JAVA API

 ArrayList<#@a>


- import 사용

- API 에 들어있는 클래스를 사용하려면 그 클래스가 어떤 패키지에 들어있는지 알아야한다.

 

1. 라이브러리에는 어떤 클래스가 있을까?

2. 크래스를 찾았을 떄 그것으로 무엇을 할 수 있을지 어떻게 알 수 있을까?

 

 - 책을 뒤져본다.

 - HTML API 문서를 활용한다. 

 

-AWT

  java GUI(Graphic User Interface) 구현

  

   *Component(컴포넌트)

      Button

      Canvas

      Checkbox

      Choice

      Label

      List

      Scrollbar

      TextComponent ( TextArea,TextField )

   *Contatiner(컨테이너)

       컴포넌트가 유리라면, 컨테이너는 창문

       모든 컴포넌트는 독립적으로 떠있을수없다. 컨테이너 안에 있어야한다

      

       Panel

       ScrollPanel

       Window (Frame, Dialog -> FileDialog )

     

   *layout(레이아웃)

      컨테이너에 컴포넌트를 붙일때 어떤식으로 배치할것인가.

 

AWT를 사용하는 프로그램에서는 프로그램의 실행과정 순으로 프로그래밍하지 않고, 발생 가능한 이벤트에 따른 처리할 내용을 나열하는 식으로 프로그래밍한다.

 

-애플릿 

 

import java.applet.Applet;

 

class 애플릿이름 extends Applet

{

 

}

 

 <APPLET CODE=" 애플릿 클래스 이름"

               CodeBase="애플릿 클래스 위치"

               Archive = " jar 파일이름"

                Name="애플릿이름"

                   Align = " 정렬"

                Hspace="수평공간크기"

                Vspace="수직공간크기"

                Width="가로크기" Height="세로크기>

<PARAM=" " VALUE=" "> //PARAM 값과 일치하면 표시되는 값 VALUE

</APPLET>

 

-문법

   * 자바 데이터형

   * 변수와 상수

   * if,switch,

   * for,While, do_while

   * break, continue

   * Array(배열)

   * static(정적)

       객체가 생성되지 않아도 사용가능

          ex) int abs_x = Math.abs(x);

 

       static 메소드는 static 메소드만 호출가능하다

       static 메소드는 일반 메소드와 오버로딩되지않는다.

       static 메소드는 static 멤버변수만 사용가능하다.

       

static 변수는 한클래스의 모든 인스턴스 공유

 

static final 변수는 상수

초기화 방법 

1 : 선언할때 그냥 초기화

    public static final int PI=3.14;

2. 정적 초기화 부분에서 초기화

 public static final int PI;   

static {

    PI=3.14;

}

 

final class : 상속못하게만듬

final method : 메소드 오버라이드 불가

 

정적 메소드만 들어있는 클래스가 있다면 그 클래스의 인스턴스를 만들 필요가 없기 때문에 그 생성자를 private로 지정하는 것이 좋다.

      

   * 상속

      ex) class a extends b

      상속된 서브 클래스 객체생성시 슈퍼클래스의 생성자를 먼저 초기화시켜줘야한다.

      슈퍼클래스의 생성자가 먼저 호출되기 때문이다.

      서브 클래스 생성자의 최상단에 super(!?!?); 를 기재한다

      ex)  class a extends b

           {

              int asset;

                 public a(int money )

                {

                           super(100); // a를 상속하는 클래스 b의 생성자에 값을 전달한다.

                           asset=money;

                }

 

           } 

 

 

   * 생성자

   * 소멸자

   * 연산자( 산술,증가/감소 , 비트,대입,논리,관계,조건)

   * 형변환 ( 캐스팅, Wrapper{랩퍼} )

   *가비지 콜렉션(Garbage Collector)

         System.gc();

   *인터페이스(Interface)

      다중상속느낌

      인터페이스의 상속을 "구현"이라고 표현

      이름만 주어지고, 그안의 내용들은 상속받는 클래스에서 정의해야한다.

     

      interface pi

{

 

     public static final double PI=3.14; // interface는 static final 만 사용가능

  public static final int i_PI=3;

 

  public double getInt(); // 메소드 선언

 

}


 

   * Method Overloading(메소드 오버로딩)

       ex) 

            public static int test(int a);

            public static int test(int a, int b);

            public static float test(float a);

            public static float test(float a,float b);

 

         첫번째 매개변수 따라간다

 

   * Method Method Overriding(메소드 오버라이딩)

        ex) 상속 시 슈퍼클래스와 서브클래스 간에 메소드가 같은 상황

            

   * Call by Value, Call by Reference

   * 패키지(package)

         Other language : 라이브러리(library)

         C : #include -> java : import

 ex)

           import java.lang.String;

           import java.lang.*;

 

 . : window의 \, 리눅스의 / 처럼 디렉토리 경로를 뜻함

 * : 패키지(package) 내의 모든 클래스 사용

 

         정적 import

           ex) import static java.lang.System.out;

                import static java.Math.*;

        out.println(sqrt(3.14));

 

-유용한 기본 클래스 ( 대소문자를 구분한다, java api 에서 class를 알면 Method도 함께알 수 있다.) 

(* 는 이 글에서 표시를 위한 기호이며, 코드에선 생략된다)

* Date

* Calendar

* Random

* String

* StringBuffer

  

  public class StringBuffer_test
{
     public static void main(String[] args)
   {
         StringBuffer ab=new StringBuffer();

        

         ab.append("si");
         ab.append(' ');
         ab.append("a");

         System.out.println(ab);

       

         ab.insert(0,"haha ");
         System.out.println(ab);
    }
} 

* Wrapper

 

   class wrapper_test
{
        public static void main(String[] args)
    {
  
        // int  -> Integer -> String
   

        int dataInt = 7;
        Integer wrapInt = new Integer(dataInt); // Int 형 -> Integer형 객체
        String dataString = wrapInt.toString(); // Integer형 객체 -> String형 객체
        
        // String -> Integer -> int
       
        String dataString_2 = "1993" ;
        Integer wrapInt_2 = Integer.valueOf(dataString_2); // String형 객체 -> Integer형 객체
        int dataInt_2 = wrapInt_2.intValue(); // Integer 형 객체 -> int형
        

    }
} 

 

// train_1 : wrapper_train.java 이라는 이름으로 float형 -> Float형 객체 -> String형 객체로 변환하기

// train_2 : 위의 파일에 String형 객체 -> Float형 객체 -> float형 으로 바꿔보기

// train_3 : wrapper class의 toString,valueOf, ***Value(ex : intValue) 세 가지 method 외우기
```
