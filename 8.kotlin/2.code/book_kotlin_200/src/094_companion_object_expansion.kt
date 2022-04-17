
// companion_object_expansion.kt
// 동반자 객체에도 확장함수를 달 수 있다

class Person {companion object}

// 동반자 객체에도 create 함수를 주입
fun Person.Companion.create() = Person()

fun main(args:Array<String>)
{
    Person.create()
}

