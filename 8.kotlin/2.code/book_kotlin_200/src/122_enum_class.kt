

// 인트 타입의 변수보다는 열거 클래스를 사용하는게 좋다
// 1. 식별자는 보통 대문자로한다
// 2. 식별자는 ,로 나열한다.
enum class Mode
{
    SELECTON, PEN, SHAPE, ERASER
}

fun main(args:Array<String>)
{
    // 현재 선택된 모드
    val mode:Mode = Mode.PEN

    when(mode)
    {
        Mode.SELECTON -> println("선택모드")
        Mode.PEN -> println("펜모드")
        Mode.SHAPE -> println("도형 모드")    
        Mode.ERASER -> println("지우개 모드")
    
    }
}