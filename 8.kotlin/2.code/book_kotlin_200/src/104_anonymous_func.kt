
// 익명함수(Anonymous Function)

fun main(args:Array<String>)
{
    val instantFunc:(Int) -> Unit = fun(number:Int):Unit
    {
        println("Hello $number")
    }
    instantFunc(33)
    instantFunc.invoke(33)
}