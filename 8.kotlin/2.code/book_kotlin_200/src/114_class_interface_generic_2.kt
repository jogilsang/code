


// 제네릭이 적용된 클래스나 인터페이스는 상속할 때 타입 인수를 전달해주어야한다

interface Plusable<T>
{
    operator fun plus(other:T):T
}

// Plusable에 generic이 적용되었기때문에, Rectangle타입을 전달한다.
class Rectangle(val width:Int, val height:Int) : Plusable<Rectangle>
{
    override fun plus(other: Rectangle): Rectangle =
        Rectangle(width + other.width, height + other.height)

        override fun toString() = "width : $width, height:$height"
}

fun main(args:Array<String>)
{
    val rect = Rectangle(10,5)
    val rect2 = Rectangle(3,8)

    println(rect + rect2)
}