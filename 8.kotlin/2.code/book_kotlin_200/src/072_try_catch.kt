import java.lang.NumberFormatException

fun main(){

    // try : 예외를 감지하는 부분
    // catch : 예외가 발생했을때 대신 실행하는 코드
    // finally : 예외와 관계없이 무조건 실행

    try {
        val str = "abcd"
        val num = str.toInt()

        println(num)
    }catch (e:NumberFormatException){
        println("String -> Number (X)")
    }finally {
        println("exit")
    }


}