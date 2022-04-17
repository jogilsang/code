

// 인트 타입의 변수보다는 열거 클래스를 사용하는게 좋다
// 1. 식별자는 보통 대문자로한다
// 2. 식별자는 ,로 나열한다.
enum class Mode_2(val number:Int)
{
    SELECTON(0),
    PEN(1),
    SHAPE(2),
    ERASER(3);

    fun printNumber()
    {
        println("모드 : $number")
    }
}

fun main(args:Array<String>)
{
    // 현재 선택된 모드
    val mode:Mode_2 = Mode_2.ERASER

    println(mode.number)
    mode.printNumber()

}