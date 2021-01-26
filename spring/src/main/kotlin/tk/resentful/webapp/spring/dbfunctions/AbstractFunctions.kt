package tk.resentful.webapp.spring.dbfunctions

interface AbstractFunctions<T> {
    fun findById(id: Long): T?
    fun findAll(): List<T>
    fun create(entity: T): T
    fun update(entity: T): T
    fun delete(entity: T): Boolean
    fun deleteById(entityId: Long): Boolean
}