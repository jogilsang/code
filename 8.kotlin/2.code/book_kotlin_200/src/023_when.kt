
fun main(){

    var i = 3

    when(i) {
        1->println("1")
        2->println("2")
        3->println("3")
    }

    var score = 82

    when(score/10) {
        9->println("A")
        8->println("B")
        7->println("C")
    }

    var grade:String= when {
        score >= 90 -> "S+"
        score >= 80 -> "A+"
        score >= 70 -> "C+"
        else -> "null"
    }
    println(grade);

}