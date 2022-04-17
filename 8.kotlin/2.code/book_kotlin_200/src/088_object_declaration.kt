// 객체선언(Object Declaration)
// java의 싱글톤 패턴을 사용하지 않아도된다.
// 프로그램 전체에서 단 하나만 존재하는 객체

object Person_088 {

    var name: String = ""
    var age: Int = 0
    fun print() {
        println(name)
        print(age)
    }
}

fun main(args: Array<String>) {
    // 식별자 Person_088으로 객체에 바로 접근가능
    // 아래처럼 선언도 가능
    // var Person_088:Person_088=Person_088
    Person_088.name = "Singleton"
    Person_088.age = 45
    Person_088.print()
}