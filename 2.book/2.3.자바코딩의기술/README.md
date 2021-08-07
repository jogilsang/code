

## 2.3 자바코딩의기술
### 목차
- [6장 테스트](#p1)

---


---

### 6장
#### p1
`코드는 꼭 테스트하라. 아니면 사용자가 하게된다. -데이브 토마스, 앤드류 헌트`
- GIVEN, WHEN, THEN
```java
// GIVEN : 전제조건
// WHEN : 실제연산 
// THEN : 기대결과

// JUnit5의 활용방법은 @Test 어노테이션을 Method에 붙이는 것
// Assertions의 Method들은 다양하여 ,assertEquals와 assertTimeout() 등이 있다.
// assertTrue의 장점은 에러 메세지를 커스터마이징 할수있는 것이지만, 모두 넣어야해서 불편하고 변경관리가 안되는 것
// assertEquals의 장점은 비교할경우, 에러메세지가 자동으로 나오기때문에 편리함 
// assertEquals를 사용할경우, 인수의 순서에 주의해야하며 JUnit5는 타입검증을 제공하지않는다

// 은행에서는 달러를 double 값에 저장하지 않는 대신, 센트를 long 변수에 저장하거나 BigDecimal를 사용한다.
// 부동소수점 연산에 완전일치는 없다. 부동소수점을 32비트,64비트의 유한한 비트 수로 표현하는건 불가능하다.
// 소수를 double과 float으로 표현할경우 근사화된 수치일 뿐이다. 산술연산이 실행되면, 다시 가장 가까운 근사값으로 변한다.
// assertEquals의 경우, 세번째 매개변수로 delta를 지원하기때문에 소수점 4자리까지 같아야한다면, 10의-4승 - 2를 한값을 넣는다.
// 자바는 IEEE 부동소수점 산술연산표준(IEEE 754)를 따른다.

// JUnit에서는 어떠한 예외도 허용하지않는 암묵적으로 Assertions가 내장되어있다
// 예외가 생기길 바라는 메소드의경우, AssertThrows를 사용한다.  

// @DisplayName으로 Method에 Test내용을 넣을수있기때문에, Method 네이밍에서 test라던가 불필요한 글자들이 빠진다
// 테스트 종료 후 비활성화 하는것들은 @Disabled를 포함한다. 비활성화 사유와 TODO : 나중에 활성화하게되는 이유, 해야될것
// 등을 명시하면 도움이된다.

// 경계케이스
// String : null, "", " ", 영문이 아닌 특수문자포함
// int : 0,1,-1,Integer.MAX_VALUE, Integer.MIN_VALUE
// double : 0, 1.0, -1.0, Double.MAX_VALUE, Double.MIN_VALUE
// Object[] : null, {}, {null}, {New Object(), null}                    
// List<Object> : null, Collections.emptyList(), Collections.singletonList(null), Arrays.asList(new Object(), null)

// @ParameterizedTest, @ValueSource, junit-quickcheck 같은건 매개변수 집합으로 메소드 하나에 대해서 테스트를 가능하게한다.
// @BeforeEach와 @BeforeAll 을 사용하지않고, 웬만하면 static메소드를 사용한다.

```

---

### Reference
- [What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)

