package tk.resentful.webapp.spring.dao.interfaces

import tk.resentful.webapp.spring.dao.AbstractDao
import tk.resentful.webapp.spring.dbfunctions.RoleFunctions
import tk.resentful.webapp.spring.entity.security.Role

interface RoleDao: AbstractDao<Role>, RoleFunctions {
}