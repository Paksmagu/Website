package tk.resentful.entity

import org.jetbrains.exposed.sql.Table

object Notes : Table() {
    val id = integer("id").autoIncrement()
    val note = varchar("note", 50)

    override val primaryKey = PrimaryKey(id, name = "PK_Notes")
}

data class Note(
        val note:String
)