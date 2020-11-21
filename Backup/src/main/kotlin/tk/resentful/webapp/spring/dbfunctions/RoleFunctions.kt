package tk.resentful.webapp.spring.dbfunctions

import tk.resentful.webapp.spring.entity.security.Role

interface RoleFunctions {
    fun findByRoleName(roleName:String):Role
}