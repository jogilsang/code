

fun main(){

    val person = object {
        val name:String = "홍길동"
        val age:Int = 50
    }
    println(person.name)
    println(person.age)

    val product = object {
        val stylecode:String = "AAA2123123"
        val barcode:String = "TSDF20200"
    }

    println("product.stylecode : " + product.stylecode)
    println("product.barcode : ${product.barcode}")

}