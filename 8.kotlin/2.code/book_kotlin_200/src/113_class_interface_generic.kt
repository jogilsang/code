

// 제네릭이 적용된 클래스와 인터페이스에는 이름 옆에 <타입 인수>를 붙여야한다.
// 생성자를 호출 할 때도 생성자 이름 옆에 <타입 인수>를 붙인다.

class Pair<A,B>(val first:A, val second:B)
{
    override fun toString() = "$first\n$second"
}

fun main(args : Array<String>) {
    val pair:Pair<Int,Double>
    pair = Pair<Int, Double>(15,9.12)
    println(pair.toString())
}

