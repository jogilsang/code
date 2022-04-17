

class build(){
    var a:Int = 0
    var b:Int = 0
}

fun main() {
    var obj1:build? = null

    obj1?.a = 100
    obj1?.b = 100

    println(obj1?.a)
    println(obj1?.b)
//    null
//    null

    var obj2:build? = build()

    obj2?.a = 100
    obj2?.b = 100

    println(obj2?.a)
    println(obj2?.b)
//    100
//    100
}