
// 타입 인수를 여러 개 받으려면 fun 키워드와 함 수 이름 사이를 <타입1,타입 2,...> 형식으로 적는다.

fun <T,R> T.map(mapper:(T) -> R) : R
{
    return mapper(this)
}

fun main (args:Array<String>)
{
    val square:Int =
        11.map{
            it*it
        }
    println(square)
}

