
// 데이터 클래스라면, 객체를 여러개 변수로 쪼갤 수 있다

data class Employee_102(val name:String, val age:Int, val salary:Int)

fun main(args:Array<String>)
{
    val (name, _ , salary) = Employee_102("John", 30, 3300)
    println(name);
    println(salary)
}