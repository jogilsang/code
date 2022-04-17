
// 데이터클래스
// Any 클래스에 있는 equals, hashcode, toString 멤버함수가 자동으로 오버라이딩된다
// equals 함수는 각 프로퍼티의 값이 하나라도 다르면 false, 같으면 true 반환
// 객체를 복사하는 copy함수가 자동으로 선언된다.

data class Employee(val name : String, val age:Int, val salary:Int)
{

}

fun main(args:Array<String>)
{
    val first = Employee("john", 30,3000)
    val second = Employee("Page", 24, 5300)
    val third = first.copy() // -> (O) -> 객체를 복사하는 copy함수가 선언되기때문에 사용할 수 있음

    println(first.toString())
    println(third.toString())
    println(first == second) // false -> 프로퍼티의 값이 하나라도 틀리기때문
    println(first == third) // true -> 프로퍼티의 값이 모두 일치하기때문
}