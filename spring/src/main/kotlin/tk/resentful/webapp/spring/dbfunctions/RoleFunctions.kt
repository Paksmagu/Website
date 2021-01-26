package tk.resentful.webapp.spring.dbfunctions

import tk.resentful.webapp.spring.entity.security.Role

/**
 * Due to roles being constant they dont need to be nullable.
 */
interface RoleFunctions {
    fun findByRoleName(roleName:String):Role
}