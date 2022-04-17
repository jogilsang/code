

// for
// kotlin의 for는 for-each 스타일만 지원한다
// C 스타일의 전통적인 for은 지원하지않는다
// contains 연산자의 in과 for문속의 in 연산자는 다르다. for문속의 in 연산자는 iterator에 적용된다.

fun main(args:Array<String>){

    for (i:Int in 1..10)
    {
        println("$i")
    }

    for (i:Int in 1..10)
    {
        if (i > 5)
            break

        println("2번쨰 : $i")
    }

//    1
//    2
//    3
//    4
//    5
//    6
//    7
//    8
//    9
//    10
//    2번쨰 : 1
//    2번쨰 : 2
//    2번쨰 : 3
//    2번쨰 : 4
//    2번쨰 : 5




}