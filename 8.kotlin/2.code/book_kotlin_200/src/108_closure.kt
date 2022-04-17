
// 클로저를 이용하면 지역변수가 소멸하지않음
// 함수가 만들어 질 때 주변 상황을 기억하는 함수를 클로저라고 부른다.

fun returnFunc(num:Int): () -> Unit = {println(num)}
fun main(args:Array<String>)
{
    val f:() -> Unit = returnFunc(30)
    f()
}