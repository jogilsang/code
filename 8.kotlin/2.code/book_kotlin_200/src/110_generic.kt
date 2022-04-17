

// T는 타입 매개변수
fun <T> toFunction(value:T) : () -> T = {value}

fun main(args :Array<String>)
{
    val func:() -> Int = toFunction<Int>(1107)
    println(func())
}

