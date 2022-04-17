
// 클래스 델리게이션, Class Delegation
// 인터페이스의 구현을 다른 클래스에 맡길 수 있다
interface Plusable_127
{
    operator fun plus(other:Int):Int
}

// Plusable_127 을 구현
class ClassDelegator:Plusable_127
{
    override fun plus(other:Int):Int
    {
        println("기본구현")
        return other
    }
}

class Sample_127:Plusable_127 by ClassDelegator()

fun main(args:Array<String>){
    println(Sample_127() + 10)
}
