fun main() {
    var x = 0
    var y = 0

    while (x <= 20) {
        y=0
        while (y <= 20) {
            if(x+y >= 10) {
                println(x)
                println(y)
                break
            }
            y++
        }
        x++
    }
}