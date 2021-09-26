* 본 코드를 사용함에 있어 책임지지않음
* 알고리즘 할거면 그냥 다른 언어사용하는걸 추천

시작
```java
   public class Main {
       public static void main(String[] args) {
             System.out.println("Hello World!");
       }
   }
```

```
Java

 

- 메모장을 사용할수있다

- 기타 작성도구로 에디트 플러스, 이클립스 등이 있다

- 유사한 언어로 C++ , C# 등이 있다. 모두 객체지향 언어이다.

- 배워도 객체지향이 뭔지 모르겠는게 함정

- 이클립스 ㅅㅂ 깔아놨더니 영문 땜에 진입장벽 높다.

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

 

bagic form ( 기본적인 형태 ) :

 

class i_world

{

  public static void main(String[] args)

 {

    System.out.println("i_world!");

 }

 

}

// 메모장에 이대로 붙여놓은뒤 txt 파일형식이 아닌 다른파일형식으로 i_world.java 로 저장한뒤

//( 확장자명이 java 여야 하며, main class 이름이 i_world 이기때문에 파일이름도 i_world 여야한다)

// 도스창에서 cd 명령어로 (ex : cd c:\myfile) 파일이 있는 폴더로 이동한다.

// javac i_world.java 를 입력하여 i_world.java를 컴파일한다

// java i_world 로 실행시킨다

// javac 과 java는 Path 설정해놓아야 위의 명령이 가능하다.

-메모리관리

heap : 인스턴스

stack : 메소드,지역변수

 

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


입력받기

일반적인 입력형식
```java
        // java
        // 입력형식, 100 1000 50
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        // kotlin
        // 입력형식
        var str = readLine().toString()
        var A = str.split(" ").get(0).toLong()// 1000
        var B = str.split(" ").get(1).toLong() // 70
        var C = str.split(" ").get(2).toLong() // 170
```
공백 입력형식
```java
         // 입력형식
        Scanner sc = new Scanner(System.in);

        // ex : 3 5 6 2 4
        // 첫 번째 행에 공백(space)을 구분자로 숫자가 주어진다
        // 각 숫자는 한 자리 숫자로 주어진다 (0과 같거나 크고, 10보다 작은 숫자)
        // 같은 숫자가 중복되어 나타나지 않는다
        String input = sc.nextLine();
        String[] splitInput = input.split(" ");
        int[] arr = new int[splitInput.length];
        
        int count = 0;
        for(String value : splitInput) {
            arr[count++] = Integer.valueOf(value);
        }
```
2차원 배열 입력형식
```java
        // 입력형식
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        int[][] users = new int[a][2];

        for(int p = 0 ; p < a ; p++) {
            int b = sc.nextInt();
            int c = sc.nextInt();

            users[p][0] = b;
            users[p][1] = c;
        }
```
숫자 입력 후 문자 입력받기 (개행문자 제거해야 오류 발생안함)
```java
        // 입출력 받음
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine(); // 개행문자 제거
        String b = sc.nextLine();
```
1차원 배열 입력형식
```java
        // kotlin
        var sc: String? = readLine()
        if (sc == null) {
            break;
        }
        var input: String = sc.toString()

        var splitInput = input.split(" ")
        var arr = Array<Int>(100, { 0 })

        var count: Int = 0
        for (value in splitInput) {
            arr[count++] = value.toInt()
        }

        var A: Int = arr[0]
        var B: Int = arr[1]
```
n 입력받고, 그만큼 줄 읽기
```java
    // kotlin
    var sc:String? = readLine()
    var input:String = sc.toString()
    var T:Int = input.toInt()
    var arr = Array<Int>(T, { 0 })

    for(i in 1..T) {
        sc = readLine()
        input = sc.toString()
        var split = input.split(" ")
        var A:Int = split[0].toInt()
        var B:Int = split[1].toInt()
        var sum = A + B
        arr[i-1] = sum
    }
```
변환
```java
String <-> String[], 문자열을 배열형태로 변환

String sentence = "asdfasdfasdfasfadsasf";
// TODO : 문자열에 공백있을경우
// sentence.trim();
String[] words = sentence.split("");
​```

arrayList <-> array , arrayList array, 리스트 배열 변환
```java
    long[] answer = {};
    ArrayList<Long> answerList = new ArrayList<>();
    answer = answerList.stream().mapToLong(p -> p.longValue()).toArray();
    return answer;
```
hashmap <-> array, hashmap array, 해시맵 배열 변환
```java
 String[] arrayString = {};
 int[] arrayInteger = {};
 HashMap<String,Integer> hashMap = new HashMap();  
 arrayString = hashMap.keySet().toArray(); // returns an array of keys
 arrayInteger = hashMap.values().toArray(); // returns an array of values
Set <-> List, Set List, 셋 리스트 변환

Set dataSet = new HashSet();

List dataList = new ArrayList(dataSet); 
```

반복, 순환, 탐색

배열 리스트 반복문, 배열 전체순환
```java
        HashSet<String> hashSet = new HashSet<>();
        Iterator<String> it = hashSet.iterator(); 
        while (it.hasNext()) {
            // value : it.next()
        }
​
```
해시셋 전체순환(해시셋 반복자)
```java
        HashSet<String> hashSet = new HashSet<>();
        Iterator<String> it = hashSet.iterator(); 
        while (it.hasNext()) {
            String temp = it.next();
        }
```
해시맵 순환(해시맵 반복)
```java
       HashMap<String,Integer> hashMap = new HashMap(); 

       for( Map.Entry<String, Integer> elem : hashMap.entrySet() ){
          String key = elem.getKey();  
          int value = elem.getValue();
       }
```
배열 원소 탐색, 비교
```java
        boolean result = Arrays.stream(intArr)
                .allMatch(a -> a%2 == 0);
        System.out.println("2의 배수? " + result);

        result = Arrays.stream(intArr)
                .anyMatch(a -> a%3 == 0);
        System.out.println("3의 배수가 하나라도 있나? " + result);

        result = Arrays.stream(intArr)
                .noneMatch(a -> a%3 == 0);
        System.out.println("3의 배수가 없나? " + result);
```
정렬

 2차원 배열, 첫번째 행 기준 오름차순 정렬
```java
        int[][] users = new int[a][2];     
  
        Arrays.sort(users, new Comparator<int[]>() {
            @Override
            public int compare(final int[] entry1, final int[] entry2) {
                final Integer time1 = entry1[0];
                final Integer time2 = entry2[0];
                return time1.compareTo(time2);
            }
        });
```
arraylist 정렬, list 정렬, 리스트 정렬
```java
        ArrayList<Integer> arrayList = new ArrayList<>();        
        // 가장 높은순것에서 아래로, 내림차순으로 정렬
        Collections.reverse(arrayList);
        // 가장 낮은거에서 높은곳으로, 오름차순 정렬(ascending)
        Collections.sort(arrayList);

```
array 정렬, 배열 정렬
```java
      int[] array = new int[]{1,2,5,4,3};
      Arrays.sort(array);
```

### for

```
for(String str : resultText) {
    printf(str);
}
```

### conversion
```
Double a -> Integer b

a.intValue()
b.doubleValue()
```

### Coment
```
expected : <> but was : <>    
```
