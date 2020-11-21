package tk.resentful.webapp.spring.dbfunctions

import tk.resentful.webapp.spring.entity.user.User

interface UserFunctions {
    fun findByUsername(userName:String): User?
}