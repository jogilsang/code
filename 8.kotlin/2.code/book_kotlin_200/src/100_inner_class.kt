
// 내부 클래스 (inner class)
// 인스턴스가 바깥 클래스의 인스턴스에 완전히 소속된다.
// inner class의 인스턴스는 반드시 outer class의 인스턴스 생성자 형태로 생성해야한다.

class Outer_100(private val value:Int)
{
    fun print()
    {
        println(this.value)
    }

    inner class Inner(private val innerValue: Int)
    {
        fun print()
        {
            this@Outer_100.print()
            println(this.innerValue + this@Outer_100.value)
        }
    }
}

fun main(args:Array<String>)
{
    val instance:Outer_100 = Outer_100(610)
    val innerInstance:Outer_100.Inner = instance.Inner(40)
    innerInstance.print()
}