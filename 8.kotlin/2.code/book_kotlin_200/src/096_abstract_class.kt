// 추상 클래스
// 여러 타입을 하나로 묶는 용도로 상속을 사용할경우
// 객체를 생성할 수 없음. open 키워드를 포함하므로, open을 붙일 필요없음
// 추상 멤버 함수 ? : 내용이 없는 멤버함수
// 추상클래스를 상속한다면, 반드시 모든 추상 멤버함수를 오버라이딩해야한다.

// AS-IS
//open class Person {
//    open fun getSalary() = 0
//}
//
//// 학생 클래스, tuition는 한 학기 등록금
//class Student(private val tuition: Int) : Person() {
//    // 학생은 등록금을 납부하므로 salary를 음수로 처리
//    override fun getSalary() = -tuition
//}
// 교수 클래스, classCount는 진행하는 수업의 수
//
//class Professor(private val classCount: Int) : Person() {
//    override fun getSalary() = classCount * 120
//}

// TO-BE
abstract class Person096 {
    abstract fun getSalary(): Int
}

// 학생 클래스, tuition는 한 학기 등록금

class Student(private val tuition:Int) : Person096()
{
    override fun getSalary(): Int = - tuition
}

// 교수 클래스, classCount는 진행하는 수업의 수
class Professor(private val classCount : Int) : Person096()
{
    override fun getSalary(): Int = classCount * 200
}

fun main(args:Array<String>)
{

}










