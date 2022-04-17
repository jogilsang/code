


// 연산자와 범위 표현식 (Range Expression)

fun main(args:Array<String>) {

    val oneToTen:IntRange = 1..10
    println(5 in oneToTen)

    val upperAToZ = 'A'..'Z'
    if('C' in upperAToZ) {
        println("\"C\" is existed");
    }

    if('p' in 'a'..'z'){
        println("\"p\" is existed");
    }
}