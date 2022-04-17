
fun main(args: Array<String>) {
    
    // 매개변수가 하나인 함수의 parameter을 생략할 수 있다
    val instantFunc:(Int) -> Unit = {
        // 매개변수를 생략하면, it라는 식별자가 생성된다.
        // EX : Int type의 매개변수가 생성됨.
        println("Hello $it")
    }

    instantFunc(33)
}