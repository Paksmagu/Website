package tk.resentful.controller

import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import tk.resentful.entity.Donator
import tk.resentful.entity.Donators
import tk.resentful.entity.Notes

class DataAccessObject {
    fun getAll():ArrayList<Donator> {
        val donatorList: ArrayList<Donator> = arrayListOf()

        transaction {
            (Donators innerJoin Notes).slice(
                    Donators.firstName,
                    Donators.lastName,
                    Donators.email,
                    Notes.note,
                    Donators.donationText
            ).selectAll().map {
                donatorList.add(Donator(
                        firstName = it[Donators.firstName], lastName = it[Donators.lastName],
                        email = it[Donators.email], note = it[Notes.note], donationText = it[Donators.donationText]
                ))
            }
        }

        return donatorList
    }

    fun getAllFromNote(note:String): ArrayList<Donator> {
        val donatorList: ArrayList<Donator> = arrayListOf()

        transaction {
            (Donators innerJoin Notes).slice(
                    Donators.firstName,
                    Donators.lastName,
                    Donators.email,
                    Notes.note,
                    Donators.donationText
            ).select {Notes.note.eq(note)}.map {
                donatorList.add(Donator(
                        firstName = it[Donators.firstName], lastName = it[Donators.lastName],
                        email = it[Donators.email], note = it[Notes.note], donationText = it[Donators.donationText]
                ))
            }
        }

        return donatorList
    }
}