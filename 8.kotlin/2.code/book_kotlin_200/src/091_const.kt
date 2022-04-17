
// const
// 변수에 접근하는 코드를 변수에 저장된 값으로 대체시킨다.
// 리터럴만 와야하는 부분에 사용하면좋다.

const val hello = "Hello" + "World"

object Foo
{
    const val bar = "bar"
}

fun main(args:Array<String>)
{
    println(hello)
    println(Foo.bar)
    println(hello)
    println(Foo.bar)
}