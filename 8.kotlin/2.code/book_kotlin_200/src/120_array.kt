

// array
// arrayOf 함수로 가변인수에 따라 array를 만들 수 있으며, heap에 생성된다.


fun main(args:Array<String>)
{

    val array = arrayOf(10,20,30,40)

    println(array.size)
    println(array[1])

    for(i in array){
        println("$i")
    }

//    4
//    20
//    10
//    20
//    30
//    40
}