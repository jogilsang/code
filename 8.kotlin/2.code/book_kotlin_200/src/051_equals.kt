fun main() {

    // 코틀린의 == 은 자바의 equals
    // 코틀린의 ===은 참조

    var a = 30
    var b = 20
    var c = 20
    var d = c

    if (b == c) println("b==c")
    else println("b!=c")
//    b==c

    if (b === c) println("b===c")
    else println("b!==c")
//    b===c

    if (c == d) println("c==d")
    else println("c!=d")
//    c==d

    if (c === d) println("c===d")
    else println("c!==d")
//    c===d


}