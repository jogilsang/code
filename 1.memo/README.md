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