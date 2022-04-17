# 0.lib
for me

## INDEX
- [kotlin-순열](#p1)
- [kotlin-조합](#p2)

---

## [kotlin-순열](https://notepad96.tistory.com/entry/Kotlin-14)
#### p1
```kotlin
fun <T> permutation(el: List<T>, fin: List<T> = listOf(), sub: List<T> = el ): List<List<T>> {
    return if(sub.isEmpty()) listOf(fin)
        else sub.flatMap { permutation(el, fin + it, sub - it) }
}
```


## kotlin-조합
#### p1

---

## Reference
