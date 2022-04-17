

// sealed 클래스는 자신의 중첩 클래스에만 상속을 허용하는 클래스이다.
// Outer 클래스는 자신의 중첩 또는 내부 클래스에서만 상속이 가능하다.

sealed class Outer_125
{
    class One:Outer_125()
    class Two:Outer_125()
    class Three:Outer_125()

    // sealed 클래스는 자신의 내부 클래스에서만 상속이 가능하다.
    // 그렇기때문에 외부의 class Four:Outer_125() 로 상속 시, ERROR가 발생한다.
}

fun main(args:Array<String>)
{
    val instance : Outer_125 = Outer_125.Three()

    val text:String = when(instance)
    {
        is Outer_125.One -> "첫 번쨰"
        is Outer_125.Two -> "두 번쨰"
        is Outer_125.Three -> "세 번쨰"
    }

    println(text)

}