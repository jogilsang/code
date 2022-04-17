class Outer // 바깥 클래스
{
    // 중첩 클래스
    // 식별자만 포함되어있을뿐, 별개의 공간에 생성된다.
    // 따라서 nested 클래스의 멤버함수는 Outer클래스의 프로퍼티나 멤버함수 접근불가
    // Outer의 인스턴스와 Outer.Nested의 인스턴스는 서로 어떠한 프로퍼티나 멤버함수도 공유하지않는다
    
    class nested 
    {
        fun hello() = println("중첩된 클래스")
    }
}

fun main(args: Array<String>) {
    val instance: Outer.nested = Outer.nested()
    instance.hello()
}