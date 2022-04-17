
// 람다식(Lambda Expression)

// 매개변수가 Int 타입이고, 반환타입이 Unit으로 함수를 저장할 수 있다. 함수를 저장할 수 있는걸 함수타입(Function Type)이라고 한다.
// 함수 리터럴에는 return을 적지않는다
// 매개변수 없이 만들수도있음
// 변수가 Nullable일 때, invoke를 통해 호출하면 Null 처리하기쉬움

fun main(args:Array<String>)
{

    // TODO : (1) 참조변수

    val instantFunc:(Int) -> Unit

    instantFunc = { number : Int ->
        println("Hello $number")
    }

    val instantFunc_2:(String) -> Unit = {
            value : String -> println("instantFunc_2 : hello")
    }

    instantFunc(33)
    // = instantFunc?.invoke(33)
    instantFunc.invoke(33)

    // TODO : (2) 매개변수가 없는경우

    val instantFunc_unit_1:() -> Unit
    val instantFunc_unit_2:() -> Unit

    instantFunc_unit_1 = {  ->
        println("Hello")
    }

    instantFunc_unit_2 = {
        println("Hello")
    }

    instantFunc_unit_1()
    instantFunc_unit_2()

}