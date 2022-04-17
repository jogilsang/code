



# 1. ASCII 반환
```
Char.toInt()는 ASCII값을 반환한다.
```

# 1. JDK Setting

## 2.1 IntelliJ IDEA(IDE) - Recomended
``` 
[File]->[New]->[Project]   
JAVA - Kotlin/JVM   
```

---

## 2.2.1 kotlinc install, 
[kotlin-native-windows-1.4.32.zip](https://kotlinlang.org/docs/command-line.html)
![image](https://user-images.githubusercontent.com/20831981/116873892-644d9080-ac53-11eb-8c5b-289de684db11.png)

## 2.2.2. sysdm.cpl -> path/bin
## 2.2.3. kotlinc -version
```
C:\Users\user>kotlinc -version
info: kotlinc-native 1.4.32-355 (JRE 1.8.0_144-b01)
Kotlin/Native: 1.4.32
```
## 2.2.4 kotlinc hello_world.kt

## 2.2.5
```
### - n 입력받고, 그만큼 줄 읽기
```kotlin
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

### - 1차원 배열 입력형식
```kotlin
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
