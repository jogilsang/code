// kotlin
// 동반자 객체(Companion Object)
// 클래스 안에 포함되는 이름 없는 객체 (no naming object)
// 한 클래스에 대해 생성된 모든 인스턴스가 공유하는 객체
// 클래스 당 1개만 존재
// java의 static같은 역활

class Person_089 private constructor() {
    companion object
    {
        fun create(): Person_089
        {
            countCreated += 1
            return Person_089()
        }

        var countCreated = 0
            private set
    }
}

fun main(args: Array<String>)
{
    val a = Person_089.create()
    val b = Person_089.create()

    println(Person_089.Companion.countCreated)
}