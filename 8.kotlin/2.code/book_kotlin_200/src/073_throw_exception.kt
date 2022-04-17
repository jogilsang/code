import java.lang.Exception

fun main(){

    println("before")
    throw Exception("0으로 나눌수없음")
    println("after")

//    before
//    Exception in thread "main" java.lang.Exception: 0으로 나눌수없음
//    at _073_throw_exceptionKt.main(073_throw_exception.kt:6)
//    at _073_throw_exceptionKt.main(073_throw_exception.kt)
}