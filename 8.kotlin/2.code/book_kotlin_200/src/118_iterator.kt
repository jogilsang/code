
// 반복자란?
// 특정 구간속에 있는 원소를 하나씩 반복적으로 꺼내기 위한 인터페이스

// 커서 ? : 특정 원소를 가리키는 Iterator 내부의 변수
// 처음에 hasNext 호출 시, 커서는 1 바로 이전을 가리킨다

fun main(args:Array<String>){

    val range:IntRange = 1..3
    val iter:Iterator<Int> = range.iterator()

    println(range.iterator().hasNext())
    println(iter.hasNext())
    println(iter.next())

    println(iter.hasNext())
    println(iter.next())

    println(iter.hasNext())
    println(iter.next())

    println(iter.hasNext())
}