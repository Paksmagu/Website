package tk.resentful.entity

import org.jetbrains.exposed.sql.Table

object Donators : Table() {
    val id = integer("id").autoIncrement()
    val firstName = varchar("first_name", 255)
    val lastName = varchar("last_name", 255)
    val email = varchar("email", 255)
    val noteId = (integer("note_id") references Notes.id)
    val donationText = text("donation_text")

    override val primaryKey = PrimaryKey(id, name = "PK_Donators")
}

data class Donator(
        val firstName:String,
        val lastName:String,
        val email:String,
        val note:String,
        val donationText:String
)