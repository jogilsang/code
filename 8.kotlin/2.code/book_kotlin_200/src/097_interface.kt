
// 인터페이스?
// 클래스에 어떤 멤버함수와 프로퍼티가 반드시 존재하는 것을 보장하기 위한 장치
// 일반 프로퍼티와 생성자는 가질 수 없다
// 인터페이스에는 생성자가 존재하지않기때문에, 상속할 때 이름 옆에 {}를 쓰지 않는다

interface Printable
{
    fun print(): Unit
}

class AAA_097:Printable
{
    override fun print()
    {
        println("hello");
    }
}

fun print(anything:Printable)
{
    anything.print()
}

fun main(args:Array<String>){
    print(AAA_097())
}
