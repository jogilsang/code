

// 고차함수 (Higher-order-Function)
// 인수로 함수를 받거나, 함수를 반환하는 함수를 뜻한다
// 함수 호출 전, 수행해야할 고정적인 작업이 있다면 고차함수 활용

fun decorate(task:() -> Unit)
{
    println("===작업시작===")
    task()
    println("===작업끝===")
}

fun main(args:Array<String>)
{
    decorate ({
        val a = 10; val b= 5
        println("$a + $b = ${a+b}")
    })
    decorate ({
        println("some");println("tasks")
    })
}
