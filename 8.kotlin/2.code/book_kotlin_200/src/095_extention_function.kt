

// AAA 클래스와 BBB 클래스는 상속관계
open class AAA;
class BBB:AAA()

// AAA 클래스의 확장함수 hello를 주입
fun AAA.hello() = println("AAA")
// BBB 클래스에 확장함수 hello를 주입
fun BBB.hello() = println("BBB")

fun main(args:Array<String>)
{
    // 타입은 AAA지만, BBB 객체를 가리키는 참조변수
    val test:AAA = BBB()
    // 확장함수는 참조변수의 타입을 따른다.
    // 확장함수와 멤버함수는 동작이 같지않다.
    test.hello()
}
