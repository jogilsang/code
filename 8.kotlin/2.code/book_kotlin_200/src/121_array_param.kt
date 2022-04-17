
fun printAll(vararg tokens:String)
{
    for (token in tokens)
        print("$token")
}

fun main(args:Array<String>)
{
    val numbers:Array<String> = arrayOf("What's ", "your", "name?")
    // 배열 앞에 *을 찍으면 배열 속의 내용을 가변 인수로 활용할 수 있다.
    printAll(*numbers)
}