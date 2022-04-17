interface Parent
{
    fun follow():Unit
}

interface Father:Parent {
    override fun follow() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}

interface Mother:Parent{
    override fun follow() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}

class Child : Mother, Father
{
    override fun follow() {
        super<Mother>.follow()
    }
}

