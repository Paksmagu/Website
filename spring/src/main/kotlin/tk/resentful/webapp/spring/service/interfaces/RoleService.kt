package tk.resentful.webapp.spring.service.interfaces

import tk.resentful.webapp.spring.dbfunctions.RoleFunctions
import tk.resentful.webapp.spring.entity.security.Role
import tk.resentful.webapp.spring.service.AbstractService

interface RoleService:AbstractService<Role>, RoleFunctions {
}