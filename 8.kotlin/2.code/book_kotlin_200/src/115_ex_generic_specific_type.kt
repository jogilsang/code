
// 제네릭을 사용하다 보면 특정 타입에만 선언되어 있는 프로퍼티나 멤버 함수에 접근하기위해
// 특정 타입만 인수로 받아야할 때 가 있다.
// 타입 인수를 특정 타입으로 제한하는 방법을 알아보자

interface ValueContainer {
    fun getValue(): Int
}

class AAA_115 : ValueContainer {
    override fun getValue(): Int = 1102
}


class BBB_115 : ValueContainer {
    override fun getValue(): Int = 127
}

fun <T : ValueContainer> T.printValue()
{
    println(this.getValue())
}

fun main(args:Array<String>)
{
    AAA_115().printValue()
    BBB_115().printValue()
}